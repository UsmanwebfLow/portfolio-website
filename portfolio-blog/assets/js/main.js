(() => {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedTheme = localStorage.getItem('theme');
  if (!storedTheme) {
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Smooth scrolling for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#' || href === '#0') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', href);
      }
    });
  });

  // Intersection Observer to reveal elements
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => observer.observe(el));

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const open = navList.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Contact form feedback (enhancement; Formspree will still work without JS)
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  if (form && formStatus) {
    form.addEventListener('submit', (e) => {
      if (form.action.includes('formspree')) {
        formStatus.textContent = 'Sending...';
      }
    });
  }
})();