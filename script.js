// =======================
// ARCHIVO: script.js
// =======================

// Fade on scroll
const faders=document.querySelectorAll('.fade');
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show');});
},{threshold:.2});
faders.forEach(f=>obs.observe(f));

// Partículas
const wrap=document.getElementById('particles');
for(let i=0;i<70;i++){
  const p=document.createElement('div');
  p.className='particle';
  p.style.left=Math.random()*100+'%';
  p.style.animationDelay=Math.random()*18+'s';
  p.style.animationDuration=14+Math.random()*18+'s';
  wrap.appendChild(p);
}

// Música (YouTube con interacción real)
let playing=false;
const btn=document.getElementById('musicBtn');
const iframe=document.getElementById('music');

btn.onclick=()=>{
  if(!playing){
    iframe.src="https://www.youtube.com/embed/uBibOsN3hpQ?autoplay=1&mute=0&controls=0";
    btn.textContent="⏸ Silenciar música";
    playing=true;
  }else{
    iframe.src="";
    btn.textContent="▶ Activar música";
    playing=false;
  }
};