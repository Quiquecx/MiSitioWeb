document.addEventListener('DOMContentLoaded', () => {
  // Año dinámico
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Menú móvil
  const burger = document.querySelector('.hamburger');
  const menu = document.getElementById('site-menu');

  burger?.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('active');
  });

  // Animación al hacer scroll para que las fotos suban suavemente
  const observerOptions = { threshold: 0.1 };
  const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll('.project-card, .app-frame').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
    revealOnScroll.observe(el);
  });
});