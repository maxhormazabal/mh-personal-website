import fs from 'fs';
import path from 'path';

// Cargar variables de entorno si estamos en Node 20.6+ usando --env-file
// O simplemente leerlas de process.env
const { ORCID_CLIENT_ID, ORCID_CLIENT_SECRET, ORCID_ID } = process.env;

if (!ORCID_CLIENT_ID || !ORCID_CLIENT_SECRET || !ORCID_ID) {
  console.error('Error: Faltan variables de entorno. Asegúrate de tener ORCID_CLIENT_ID, ORCID_CLIENT_SECRET y ORCID_ID.');
  process.exit(1);
}

const CONTENT_DIR = path.join(process.cwd(), 'src/content/research');

async function fetchToken() {
  const response = await fetch('https://orcid.org/oauth/token', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: ORCID_CLIENT_ID,
      client_secret: ORCID_CLIENT_SECRET,
      grant_type: 'client_credentials',
      scope: '/read-public',
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch token: ${response.statusText}`);
  }

  const data = await response.json();
  return data.access_token;
}

async function fetchWorks(token) {
  const response = await fetch(`https://pub.orcid.org/v3.0/${ORCID_ID}/works`, {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch works: ${response.statusText}`);
  }

  return await response.json();
}

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

async function main() {
  try {
    console.log('Obteniendo token de acceso...');
    const token = await fetchToken();
    
    console.log('Obteniendo publicaciones de ORCID...');
    const data = await fetchWorks(token);
    
    const groups = data.group || [];
    console.log(`Se encontraron ${groups.length} grupos de publicaciones.`);

    if (!fs.existsSync(CONTENT_DIR)) {
      fs.mkdirSync(CONTENT_DIR, { recursive: true });
    }

    for (const group of groups) {
      const summary = group['work-summary']?.[0];
      if (!summary) continue;

      const title = summary.title?.title?.value || 'Sin título';
      const year = summary['publication-date']?.year?.value || 'Sin año';
      const type = summary.type || 'other';
      const venue = summary['journal-title']?.value || 'ORCID';
      
      // Intentar obtener autores
      const contributors = summary['contributors']?.contributor || [];
      const authorsList = contributors
        .map(c => c['credit-name']?.value)
        .filter(Boolean)
        .join(', ');
      const authors = authorsList || "Hormazábal M., et al.";

      // Mapear tipos de ORCID a los tuyos si es necesario
      let mappedType = 'preprint';
      if (type.includes('CONFERENCE')) mappedType = 'conference';
      if (type.includes('WORKSHOP')) mappedType = 'workshop';
      if (type.includes('JOURNAL')) mappedType = 'article';

      const slug = slugify(title);
      const filePath = path.join(CONTENT_DIR, `${slug}.md`);

      // Solo creamos el archivo si no existe, para no sobreescribir tus ediciones manuales
      if (!fs.existsSync(filePath)) {
        const content = `---
year: ${JSON.stringify(year)}
type: ${JSON.stringify(mappedType)}
venue: ${JSON.stringify(venue.replace(/\s+/g, ' '))}
en: ${JSON.stringify(title.replace(/\s+/g, ' '))}
es: ${JSON.stringify(title.replace(/\s+/g, ' '))}
authors: ${JSON.stringify(authors)}
aen: "Resumen en inglés obtenido de ORCID..."
aes: "Resumen en español (añadir manualmente)..."
---
`;
        fs.writeFileSync(filePath, content);
        console.log(`Creado: ${slug}.md`);
      } else {
        console.log(`Omitido (ya existe): ${slug}.md`);
      }
    }

    console.log('¡Proceso completado!');
  } catch (error) {
    console.error('Error en el proceso:', error);
  }
}

main();
