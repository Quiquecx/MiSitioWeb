// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menú móvil
const burger = document.querySelector('.hamburger');
const menu = document.getElementById('site-menu');

function closeMenuOnNavigate(e){
  if(e.target.tagName === 'A'){
    menu.style.display = 'none';
    burger.setAttribute('aria-expanded','false');
  }
}

burger?.addEventListener('click', () => {
  const expanded = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', String(!expanded));
  menu.style.display = expanded ? 'none' : 'flex';
});

menu?.addEventListener('click', closeMenuOnNavigate);
