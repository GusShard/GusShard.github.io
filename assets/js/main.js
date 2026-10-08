/* Interações pequenas, sem dependências externas. */
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('js-enabled');
  const menuToggle = document.querySelector('#menu-toggle');
  const navLinks = document.querySelector('#nav-links');
  const currentYear = document.querySelector('#current-year');

  if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
  }

  // Menu móvel: abre/fecha e volta a fechar após navegar.
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      const label = menuToggle.querySelector('.sr-only');
      if (label) label.textContent = isOpen ? 'Fechar menu' : 'Abrir menu';
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        const label = menuToggle.querySelector('.sr-only');
        if (label) label.textContent = 'Abrir menu';
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        navLinks.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Revela seções ao entrar na tela. Sem IntersectionObserver, o conteúdo permanece visível.
  const revealItems = document.querySelectorAll('.reveal');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }
});
