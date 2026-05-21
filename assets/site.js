document.addEventListener("DOMContentLoaded",()=>{const b=document.querySelector(".menu-toggle"),n=document.getElementById("site-nav");if(!b||!n)return;b.addEventListener("click",()=>{const o=b.getAttribute("aria-expanded")==="true";b.setAttribute("aria-expanded",String(!o));n.classList.toggle("is-open",!o)})});
// v19: make guide cards tappable when they contain a detail link.
document.querySelectorAll('.jump-card[data-href]').forEach((card) => {
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'link');
  const url = card.dataset.href;
  const go = (event) => {
    if (event.target.closest('a, button, input, select, textarea')) return;
    window.location.href = url;
  };
  card.addEventListener('click', go);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      window.location.href = url;
    }
  });
});
