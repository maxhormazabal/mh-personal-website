import{T as m}from"./ViewTransitions.astro_astro_type_script_index_0_lang.DscQfK3_.js";import{b as c,w as y,e as v}from"./content.DXmGIyis.js";import"./Sidebar.astro_astro_type_script_index_0_lang.CLjL4Rcw.js";function i(){const e=localStorage.getItem("mh-lang")||"en",a=m[e],d=document.getElementById("about-heading");d&&(d.textContent=a.about_heading);const r=document.getElementById("about-quote");r&&(r.textContent=a.about_quote);const s=document.getElementById("work-heading");s&&(s.textContent=a.work_heading);const p=document.getElementById("edu-heading");p&&(p.textContent=a.edu_heading);const l=document.getElementById("bio-container");if(l){const t=c[e];l.innerHTML=t.map((n,o)=>`
        <p style="margin-bottom: ${o<t.length-1?"20px":"0"}; text-wrap: pretty;">${n}</p>
      `).join("")}const f=document.getElementById("work-container");if(f){const t=y[e];f.innerHTML=t.map((n,o)=>`
        <div style="display: flex; gap: 20px; padding: 12px 0; border-bottom: ${o<t.length-1?"1px solid var(--ink-5)":"none"};">
          <span style="font-family: var(--font-mono); font-size: 11px; color: var(--ink-4); width: 72px; flex-shrink: 0; padding-top: 2px;">${n.year}</span>
          <div>
            <div>
              <span style="font-family: var(--font-body); font-size: 15px; color: var(--ink);">${n.role}</span>
              <span style="font-family: var(--font-body); font-size: 15px; color: var(--ink-3);"> — ${n.org}</span>
            </div>
            ${n.note?`<div style="font-family: var(--font-mono); font-size: 10.5px; color: var(--ink-4); margin-top: 2px;">${n.note}</div>`:""}
          </div>
        </div>
      `).join("")}const g=document.getElementById("edu-container");if(g){const t=v[e];g.innerHTML=t.map((n,o)=>`
        <div style="display: flex; gap: 20px; padding: 12px 0; border-bottom: ${o<t.length-1?"1px solid var(--ink-5)":"none"};">
          <span style="font-family: var(--font-mono); font-size: 11px; color: var(--ink-4); width: 72px; flex-shrink: 0; padding-top: 2px;">${n.year}</span>
          <div>
            <span style="font-family: var(--font-body); font-size: 15px; color: var(--ink);">${n.degree}</span>
            <span style="font-family: var(--font-body); font-size: 15px; color: var(--ink-3);"> — ${n.school}</span>
          </div>
        </div>
      `).join("")}}i();window.addEventListener("mh-lang-changed",i);document.addEventListener("astro:after-swap",i);
