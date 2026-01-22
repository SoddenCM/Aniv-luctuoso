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

/* ============================
   CONTROL DE AUDIO LOCAL
   Compatible con GitHub Pages
   ============================ */

const audio = document.getElementById('audio');
const musicBtn = document.getElementById('musicBtn');

let isPlaying = false;

/* 
  DESBLOQUEO DE AUDIO
  Necesario para móviles y navegadores internos
*/
function unlockAudio() {
  audio.play()
    .then(() => {
      audio.pause();
      document.removeEventListener('click', unlockAudio);
      document.removeEventListener('touchstart', unlockAudio);
    })
    .catch(() => {});
}

document.addEventListener('click', unlockAudio);
document.addEventListener('touchstart', unlockAudio);

/*
  CONTROL MANUAL DE REPRODUCCIÓN
*/
musicBtn.addEventListener('click', () => {
  if (!isPlaying) {
    audio.volume = 0.5; // volumen respetuoso
    audio.play();
    musicBtn.textContent = '⏸ Pausar música';
    isPlaying = true;
  } else {
    audio.pause();
    musicBtn.textContent = '▶ Activar música';
    isPlaying = false;
  }
});
