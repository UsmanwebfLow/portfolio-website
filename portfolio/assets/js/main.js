(function () {
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  if (nav && navToggle) {
    navToggle.addEventListener('click', () => {
      const expanded = nav.getAttribute('aria-expanded') === 'true';
      nav.setAttribute('aria-expanded', String(!expanded));
      navToggle.setAttribute('aria-expanded', String(!expanded));
    });
  }

  // Reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  // Project filters
  const grid = document.getElementById('project-grid');
  const filterButtons = document.querySelectorAll('.filters .chip');
  if (grid && filterButtons.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tag = btn.getAttribute('data-filter');
        grid.querySelectorAll('.card').forEach((card) => {
          const tags = (card.getAttribute('data-tags') || '').split(',');
          const show = tag === 'all' || tags.includes(tag);
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  // Home: fetch latest 3 posts
  async function populateHomeBlog() {
    const container = document.getElementById('home-blog');
    if (!container) return;
    try {
      const resp = await fetch('/data/blog/index.json');
      const data = await resp.json();
      const posts = data.posts
        .slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);
      container.innerHTML = posts.map(p => `
        <article class="card">
          <div class="card-body">
            <h3>${p.title}</h3>
            <p class="muted">${p.date} • ${p.tags.join(', ')}</p>
            <p>${p.excerpt}</p>
            <div class="card-actions">
              <a class="btn btn-sm" href="/blog/post.html?slug=${encodeURIComponent(p.slug)}">Read</a>
            </div>
          </div>
        </article>
      `).join('');
    } catch (e) {
      console.error('Failed loading home posts', e);
    }
  }
  populateHomeBlog();
})();