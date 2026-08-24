
(async()=>{const root=document.getElementById('app'),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));let D;try{D=await fetch('isoladas.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error();return r.json()})}catch(e){root.innerHTML='<div class="intro">Não foi possível carregar as informações.</div>';return}
const lis=a=>`<ul class="list">${a.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
root.innerHTML=`<section class="hero"><div class="eyebrow">UFPR · CURSO DE BIOMEDICINA</div><h1>${esc(D.title)}</h1><p>${esc(D.subtitle)}</p></section>
<div class="intro">${esc(D.intro)}</div>
<section class="section"><h2>Prazos — ${esc(D.semester)}</h2><div class="deadlines"><article class="card"><span class="date">${esc(D.deadline.request)}</span><h3>Solicitação</h3><p>Período para entrega da solicitação de matrícula em disciplina isolada.</p></article><article class="card"><span class="date">${esc(D.deadline.analysis)}</span><h3>Análise institucional</h3><p>Período de análise pelos setores responsáveis.</p></article></div><div class="warning">${esc(D.deadline.warning)}</div></section>
<section class="section"><div class="grid"><article class="card"><h3>Quem pode solicitar?</h3>${lis(D.eligibility)}</article><article class="card"><h3>Limites e restrições</h3>${lis(D.limits)}</article></div></section>
<section class="section"><h2>Documentos obrigatórios</h2><div class="panel">${lis(D.documents)}</div></section>
<section class="section"><h2>Como funciona</h2><div class="flow">${D.flow.map(x=>`<article class="step"><div class="num">${esc(x.step)}</div><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></article>`).join('')}</div></section>
<section class="section"><h2>Formulário oficial</h2><div class="formbox"><h3>${esc(D.form.title)}</h3><p>${esc(D.form.note)}</p><a href="${esc(D.form.url)}" target="_blank" rel="noopener">Abrir formulário em PDF</a></div></section>
<section class="section"><h2>Atenção antes de entregar</h2><div class="danger">${lis(D.important)}</div></section>
<section class="section"><h2>Normas e procedimentos</h2><div class="links">${D.legal.map(l=>`<article class="linkcard"><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.name)}</a><p>${esc(l.description)}</p></article>`).join('')}</div></section>
<section class="section"><h2>Acessos importantes</h2><div class="links">${D.links.map(l=>`<article class="linkcard"><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a><p>${esc(l.description)}</p></article>`).join('')}</div></section>
<section class="section"><h2>Contato</h2><div class="panel contact">Coordenação do Curso: <a href="mailto:${esc(D.contact.email)}">${esc(D.contact.email)}</a> · ${esc(D.contact.phone)}</div></section>`;})();
