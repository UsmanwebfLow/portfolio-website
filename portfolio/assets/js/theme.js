(function () {
  const root = document.documentElement;
  const STORAGE_KEY = 'site-theme';

  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
  }

  const current = getPreferredTheme();
  applyTheme(current);

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.classList && target.classList.contains('theme-toggle')) {
      const now = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      applyTheme(now);
      localStorage.setItem(STORAGE_KEY, now);
    }
  });
})();