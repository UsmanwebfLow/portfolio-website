(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (toggle) toggle.textContent = theme === 'dark' ? '🌙' : '☀️';
  }

  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const stored = localStorage.getItem('theme');
  if (stored) {
    applyTheme(stored);
  } else {
    const current = root.getAttribute('data-theme') || (prefersDark ? 'dark' : 'light');
    applyTheme(current);
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('theme', next);
    });
  }
})();