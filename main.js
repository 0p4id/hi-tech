(()=>{const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const mb=$('.mb'),nav=$('#nav');mb.onclick=()=>{const o=mb.getAttribute('aria-expanded')==='true';mb.setAttribute('aria-expanded',!o);nav.classList.toggle('open',!o)};
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){mb.click();mb.focus()}});
const y=$('#yr');if(y)y.textContent=new Date().getFullYear();
const io='IntersectionObserver'in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08}):null;
$$('.rv').forEach(el=>io?io.observe(el):el.classList.add('in'));
const cs=$('.cs');if(cs){const step=()=>cs.firstElementChild.getBoundingClientRect().width+20;$('.cp').onclick=()=>cs.scrollBy({left:-step(),behavior:'smooth'});$('.cn').onclick=()=>cs.scrollBy({left:step(),behavior:'smooth'})}
const lb=$('.lb'),pics=$$('.g');if(lb&&pics.length){let i=0,last;const im=$('img',lb),cap=$('figcaption',lb);
const show=n=>{i=(n+pics.length)%pics.length;im.src=pics[i].dataset.full;im.alt=pics[i].dataset.alt;cap.textContent=pics[i].dataset.alt};
const open=n=>{last=document.activeElement;show(n);lb.hidden=false;document.body.style.overflow='hidden';$('.lbc',lb).focus()};
const close=()=>{lb.hidden=true;document.body.style.overflow='';last&&last.focus()};
pics.forEach((p,n)=>p.onclick=()=>open(n));$('.lbc',lb).onclick=close;$('.lbp',lb).onclick=()=>show(i-1);$('.lbn',lb).onclick=()=>show(i+1);lb.onclick=e=>{if(e.target===lb)close()};
document.addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(i-1);if(e.key==='ArrowRight')show(i+1);
if(e.key==='Tab'){const f=$$('button',lb),a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}})}})();
