import{T as y}from"./ViewTransitions.astro_astro_type_script_index_0_lang.DscQfK3_.js";import{c as m}from"./content.DXmGIyis.js";import"./Sidebar.astro_astro_type_script_index_0_lang.CLjL4Rcw.js";function a(){const s=localStorage.getItem("mh-lang")||"en",e=y[s],r=document.getElementById("teaching-heading");r&&(r.textContent=e.teaching_heading);const l=document.getElementById("teaching-sub");l&&(l.textContent=e.teaching_sub);const p=document.getElementById("philosophy-heading");p&&(p.textContent=e.philosophy_heading);const d=document.getElementById("about-quote");d&&(d.textContent=e.about_quote);const c=document.getElementById("courses-heading");c&&(c.textContent=e.courses_heading);const x=document.getElementById("courses-container");if(x){const n=m[s],o=t=>`
        <div style="background: var(--surface-2); border: 1px solid var(--ink-5); border-radius: 4px; padding: 18px 22px; display: flex; gap: 16px; align-items: flex-start;">
          <div style="color: var(--ink-4); padding-top: 2px; flex-shrink: 0;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              ${t.icon==="book"?'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>':t.icon==="cpu"?'<rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>':t.icon==="code"?'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>':'<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>'}
            </svg>
          </div>
          <div style="flex: 1;">
            <div style="font-family: var(--font-display); font-size: 17px; font-weight: 400; color: var(--ink); margin-bottom: 6px; line-height: 1.25;">${t.title}</div>
            <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
              <span style="font-family: var(--font-mono); font-size: 10.5px; color: var(--ink-3);">${t.context}</span>
              <span style="font-family: var(--font-mono); font-size: 10.5px; color: var(--ink-4);">${t.years}</span>
              <span style="font-family: var(--font-mono); font-size: 9px; background: var(--surface); border: 1px solid var(--ink-5); border-radius: 2px; padding: 2px 7px; color: var(--ink-4);">${t.level}</span>
            </div>
          </div>
        </div>
      `,i=e;x.innerHTML=`
        <div style="margin-bottom: 24px;">
          <h3 style="font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-3); margin-bottom: 12px;">${i.section_lectures}</h3>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${n.lectures.map(o).join("")}
          </div>
        </div>
        <div style="margin-bottom: 24px;">
          <h3 style="font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-3); margin-bottom: 12px;">${i.section_practical}</h3>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${n.practicalSessions.map(o).join("")}
          </div>
        </div>
        <div style="margin-bottom: 24px;">
          <h3 style="font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-3); margin-bottom: 12px;">${i.section_assistant}</h3>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${n.teachersAssistant.map(o).join("")}
          </div>
        </div>
      `}}a();window.addEventListener("mh-lang-changed",a);document.addEventListener("astro:after-swap",a);
