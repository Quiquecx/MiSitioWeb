// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menú móvil mejorado
const burger = document.querySelector('.hamburger');
const menu = document.getElementById('site-menu');

// Abre/cierra el menú alternando la clase 'active'
burger?.addEventListener('click', () => {
  const expanded = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', String(!expanded));
  menu.classList.toggle('active');
});

// Cierra el menú al hacer clic en cualquier enlace dentro del menú
menu?.addEventListener('click', function(e){
  if(e.target.tagName === 'A'){
    menu.classList.remove('active');
    burger.setAttribute('aria-expanded','false');
  }
});