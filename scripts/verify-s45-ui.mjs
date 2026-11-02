import { writeFileSync } from 'node:fs';
const targets = await fetch('http://127.0.0.1:9222/json').then(r => r.json());
const target = targets.find(t => t.type === 'page' && t.url.includes('3000-'));
if (!target) throw new Error('Onglet de preview indisponible');
const socket = new WebSocket(target.webSocketDebuggerUrl);
const pending = new Map(); let seq = 0;
await new Promise((resolve, reject) => { socket.addEventListener('open', resolve, {once:true}); socket.addEventListener('error',reject,{once:true}); });
socket.addEventListener('message', event => {
  const message=JSON.parse(event.data);
  if(message.id && pending.has(message.id)) { const p=pending.get(message.id); pending.delete(message.id); message.error ? p.reject(new Error(message.error.message)) : p.resolve(message.result); }
});
const call=(method,params={}) => new Promise((resolve,reject)=>{const id=++seq;pending.set(id,{resolve,reject});socket.send(JSON.stringify({id,method,params}));});
const js=expression => call('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true}).then(r=>{if(r.exceptionDetails)throw new Error(JSON.stringify(r.exceptionDetails));return r.result.value;});
const sleep=ms => new Promise(r=>setTimeout(r,ms));
const origin=new URL(target.url).origin;
await call('Page.enable');
const reports=[];
const cardsExpression=`[...document.querySelectorAll('div.cursor-pointer')].filter(n=>n.querySelector('h3'))`;
try {
  for(const width of [1440,375]) {
    await call('Emulation.setDeviceMetricsOverride',{width,height:width===375?812:1080,deviceScaleFactor:1,mobile:width===375});
    for(const path of ['/', '/semaine/44']) {
      await call('Page.navigate',{url:origin+path}); await sleep(1200);
      await js(`localStorage.setItem('veille-analytics-consent','refused');document.querySelectorAll('button').forEach(b=>{if(b.textContent.trim().toUpperCase()==='REFUSER')b.click();})`);
      for(const theme of ['light','dark']) {
        await js(`document.documentElement.classList.toggle('dark',${theme==='dark'});`);
        const layout=await js(`(()=>{const cards=${cardsExpression};const bonus=[...document.querySelectorAll('article')].find(n=>n.textContent.includes('BONUS'));return {cards:cards.length,labels:cards.map(n=>n.textContent.split('IMPORTANT')[0].slice(0,75)),bonusWidth:Math.round(bonus.getBoundingClientRect().width),gridWidth:Math.round(bonus.parentElement.getBoundingClientRect().width),overflow:document.documentElement.scrollWidth>innerWidth};})()`);
        if(layout.cards!==9 || layout.overflow)throw new Error('Structure ou overflow : '+JSON.stringify({width,path,theme,layout}));
        if(width===375 && Math.abs(layout.bonusWidth-layout.gridWidth)>2)throw new Error('Bonus mobile ne couvre pas les deux colonnes');
        if(width===1440 && layout.bonusWidth>=layout.gridWidth/2)throw new Error('Bonus desktop trop large');
        const analyses=[];
        for(let index=0;index<9;index++) {
          await js(`${cardsExpression}[${index}].click()`);await sleep(80);
          const front=await js(`(()=>{const d=document.querySelector('[role="dialog"]');return {title:d?.getAttribute('aria-label'),sources:d?.querySelectorAll('a[href^="https://"]').length,flip:!!d?.querySelector('button[title^="Voir"]')};})()`);
          if(!front.sources || !front.flip)throw new Error('Face avant incomplète '+JSON.stringify({path,index,front}));
          await js(`document.querySelector('[role="dialog"] button[title^="Voir"]').click()`);await sleep(80);
          const back=await js(`(()=>{const d=document.querySelector('[role="dialog"]');return {complete:d?.textContent.includes('ANALYSE COMPLÈTE'),words:d?.querySelector('p')?.textContent.trim().split(/\\s+/).length};})()`);
          if(!back.complete || back.words<100)throw new Error('Face analyse incomplète '+JSON.stringify({path,index,back}));
          await js(`document.querySelector('[role="dialog"] button[title="Fermer la modale"]').click()`);await sleep(40);
          analyses.push({index:index+1,...front,...back});
        }
        await js(`[...document.querySelectorAll('article')].find(n=>n.textContent.includes('BONUS')).click()`);await sleep(80);
        const bonusFront=await js(`(()=>({source:!![...document.querySelectorAll('div')].find(d=>d.classList.contains('z-[200]'))?.querySelector('a[href^="https://"]'),flip:[...document.querySelectorAll('button')].some(b=>b.textContent.trim()==='ANALYSE')}))()`);
        await js(`[...document.querySelectorAll('button')].find(b=>b.textContent.trim()==='ANALYSE').click()`);await sleep(80);
        const bonusBack=await js(`document.body.textContent.includes('ANALYSE COMPLÈTE') && [...document.querySelectorAll('button')].some(b=>b.textContent.trim()==='RETOUR')`);
        if(!bonusFront.source || !bonusFront.flip || !bonusBack)throw new Error('Bonus incomplet');
        await js(`[...document.querySelectorAll('button')].find(b=>b.textContent.trim()==='FERMER').click()`);await sleep(40);
        const filters=[];
        if(path==='/') {
          for(const name of ['GOOGLE','SEO','DATA','ARCHI','CDP','UX','IA','INNOV MKT','MESURE']) {
            await js(`[...document.querySelectorAll('button')].find(b=>b.textContent.trim()===${JSON.stringify(name)}).click()`);await sleep(40);
            const count=await js(`${cardsExpression}.length`);
            if(count!==1)throw new Error('Filtre '+name+' : '+count+' cartes');
            filters.push({name,count});
          }
          await js(`[...document.querySelectorAll('button')].find(b=>b.textContent.trim()==='TOUS').click()`);await sleep(40);
        }
        reports.push({path,width,theme,layout,analyses,bonusFront,bonusBack,filters});
        console.log(path,width,theme,'9 analyses complètes, Bonus et filtres OK');
      }
    }
  }
  writeFileSync('/home/ubuntu/veilleiaweb/content/2026-W45/controle-ui.json',JSON.stringify({checkedAt:'2026-11-02',results:reports},null,2)+'\n');
} finally {
  await call('Emulation.clearDeviceMetricsOverride');
  await js(`document.documentElement.classList.remove('dark')`).catch(()=>{});
  socket.close();
}
