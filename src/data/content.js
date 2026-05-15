export const allPosts = [
  { date: 'Apr 2026', en: 'On document layout as a first-class model input',   es: 'El layout del documento como input de primer orden',       type: 'essay', tags: ['document-ai','multimodal'], mins: 9  },
  { date: 'Feb 2026', en: 'Teaching AI to a room with no CS background',        es: 'Enseñar IA a quien no sabe programar',                     type: 'essay', tags: ['education','pedagogy'],     mins: 7  },
  { date: 'Jan 2026', en: 'A working note on table extraction from PDFs',        es: 'Nota de trabajo: extracción de tablas en PDFs',            type: 'note',  tags: ['document-ai'],              mins: 5  },
  { date: 'Nov 2025', en: "What 'multimodal' really means — and doesn't",        es: 'Lo que "multimodal" realmente significa (y lo que no)',    type: 'essay', tags: ['multimodal','nlp'],         mins: 11 },
  { date: 'Sep 2025', en: 'On the gap between research and production',           es: 'La brecha entre investigación y producción',               type: 'essay', tags: ['engineering','research'],   mins: 8  },
  { date: 'Jul 2025', en: 'Why I still teach after seven years',                  es: 'Por qué sigo enseñando después de siete años',            type: 'essay', tags: ['education'],                mins: 6  },
  { date: 'May 2025', en: 'Reading notes: LayoutLM and its successors',           es: 'Notas de lectura: LayoutLM y sus sucesores',              type: 'note',  tags: ['document-ai','paper-notes'], mins: 5  },
];

export const pubs = [
  {
    year: '2025', type: 'conference', venue: 'ICDAR 2025',
    en: 'Multimodal Document Understanding with Layout-Aware Transformer Models',
    es: 'Comprensión Multimodal de Documentos con Modelos Transformer con Conciencia de Layout',
    authors: 'Hormazábal M., et al.',
    aen: 'We present an approach to document understanding that integrates spatial layout information with textual content through a multimodal transformer architecture, achieving strong results on document parsing benchmarks.',
    aes: 'Presentamos un enfoque para la comprensión de documentos que integra información de layout espacial con contenido textual mediante una arquitectura transformer multimodal.',
  },
  {
    year: '2024', type: 'workshop', venue: 'Document Analysis Workshop, 2024',
    en: 'Visual Information Extraction from Complex Document Layouts',
    es: 'Extracción de Información Visual en Documentos con Layouts Complejos',
    authors: 'Hormazábal M., et al.',
    aen: 'An investigation into methods for extracting structured information from documents with complex visual layouts — tables, forms, and mixed-content pages — using vision-language models.',
    aes: 'Una investigación sobre métodos para extraer información estructurada de documentos con layouts visuales complejos, incluyendo tablas, formularios y páginas con contenido mixto.',
  },
  {
    year: '2024', type: 'preprint', venue: 'arXiv preprint',
    en: 'Towards Explainable Document AI: Interpretability in Layout Understanding',
    es: 'Hacia una IA Documental Explicable: Interpretabilidad en la Comprensión de Layout',
    authors: 'Hormazábal M., et al.',
    aen: 'This work examines the interpretability of document understanding models, proposing methods to make spatial reasoning more transparent and traceable.',
    aes: 'Este trabajo examina la interpretabilidad de los modelos de comprensión de documentos, proponiendo métodos para hacer el razonamiento espacial más transparente y trazable.',
  },
];

export const courses = {
  en: [
    { title: 'Statistics for Data Science',           years: '2016–2022',   context: 'Universidad del Bío-Bío, Chile',   level: 'Undergraduate', icon: 'book'      },
    { title: 'Machine Learning Fundamentals',          years: '2019–present', context: 'Various institutions',             level: 'Intermediate',  icon: 'cpu'       },
    { title: 'Python for Data Engineering',            years: '2022–2023',   context: 'NTT DATA',                         level: 'Professional',  icon: 'code'      },
    { title: 'Introduction to AI & Neural Networks',   years: '2023–present', context: 'Graduate seminar, USC / UAB',      level: 'Graduate',      icon: 'layers'    },
  ],
  es: [
    { title: 'Estadística para Ciencia de Datos',     years: '2016–2022',   context: 'Universidad del Bío-Bío, Chile',  level: 'Grado',       icon: 'book'   },
    { title: 'Fundamentos de Machine Learning',        years: '2019–presente', context: 'Diversas instituciones',          level: 'Intermedio',  icon: 'cpu'    },
    { title: 'Python para Ingeniería de Datos',        years: '2022–2023',   context: 'NTT DATA',                        level: 'Profesional', icon: 'code'   },
    { title: 'Introducción a la IA y Redes Neuronales',years: '2023–presente', context: 'Seminario posgrado, USC / UAB',   level: 'Posgrado',    icon: 'layers' },
  ]
};

export const work = {
  en: [
    { year: '2023–',    role: 'PhD Researcher',  org: 'Computer Vision Center (CVC · UAB)',       note: 'Multimodal document understanding' },
    { year: '2023–',    role: 'Founder',          org: 'Document AI startup',                      note: 'Document processing & field extraction' },
    { year: '2022–23',  role: 'Data Engineer',    org: 'NTT DATA',                                 note: null },
    { year: '2016–',    role: 'Teacher',          org: 'Independent',                              note: 'Statistics, data science, AI' },
  ],
  es: [
    { year: '2023–',    role: 'Investigador PhD', org: 'Centre de Visió per Computador (CVC · UAB)', note: 'Comprensión multimodal de documentos' },
    { year: '2023–',    role: 'Fundador',         org: 'Startup de IA documental',                  note: 'Procesamiento y extracción de documentos' },
    { year: '2022–23',  role: 'Data Engineer',    org: 'NTT DATA',                                  note: null },
    { year: '2016–',    role: 'Docente',          org: 'Independiente',                             note: 'Estadística, ciencia de datos, IA' },
  ]
};

export const edu = {
  en: [
    { year: '2022–24', degree: 'MSc Artificial Intelligence',  school: 'University of Santiago de Compostela', loc: 'Galicia, Spain' },
    { year: '2017–21', degree: 'BEng Industrial Engineering',  school: 'University of Bío-Bío',               loc: 'Chile' },
  ],
  es: [
    { year: '2022–24', degree: 'Máster en Inteligencia Artificial', school: 'Universidad de Santiago de Compostela', loc: 'Galicia, España' },
    { year: '2017–21', degree: 'Ingeniería Industrial',              school: 'Universidad del Bío-Bío',              loc: 'Chile' },
  ]
};

export const bio = {
  en: [
    "I'm Maximiliano Hormazábal — Max. Born in Chile, now living in Galicia, Spain. I'm a researcher and builder working at the intersection of AI, document understanding, and education.",
    "Currently pursuing a PhD at the Computer Vision Center (UAB), I work on multimodal systems that navigate and understand complex visual information — PDFs, forms, tables, technical documents. Alongside research, I build real-world AI systems through a document processing startup focused on taking advanced AI into practical use.",
    "My broader interest lies in how these technologies can reshape the way we learn, teach, and interact with knowledge. I've been teaching since I was 17, and I don't plan to stop.",
    "This site is a long-running public workspace. Writing here helps me think. It accumulates slowly, and that's intentional.",
  ],
  es: [
    "Soy Maximiliano Hormazábal — Max. Nacido en Chile, ahora viviendo en Galicia, España. Soy investigador y creador trabajando en la intersección de la IA, la comprensión de documentos y la educación.",
    "Actualmente doctorando en el Centre de Visió per Computador (UAB), trabajo en sistemas multimodales que navegan y comprenden información visual compleja — PDFs, formularios, tablas, documentos técnicos. Junto a la investigación, construyo sistemas de IA aplicados a través de una startup de procesamiento documental.",
    "Mi interés más amplio radica en cómo estas tecnologías pueden transformar la forma en que aprendemos, enseñamos e interactuamos con el conocimiento. Llevo enseñando desde los 17 años, y no tengo intención de parar.",
    "Este sitio es un espacio de trabajo público de largo recorrido. Escribir aquí me ayuda a pensar. Se acumula despacio, y eso es intencional.",
  ]
};
