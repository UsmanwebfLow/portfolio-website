(function () {
  const listEl = document.getElementById('blog-list');
  const paginationEl = document.getElementById('pagination');
  const searchEl = document.getElementById('blog-search');

  if (!listEl) return;
  const PAGE_SIZE = 6;
  let allPosts = [];
  let filtered = [];
  let currentPage = 1;

  function render() {
    const start = (currentPage - 1) * PAGE_SIZE;
    const page = filtered.slice(start, start + PAGE_SIZE);
    listEl.innerHTML = page.map(p => `
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

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    paginationEl.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.textContent = String(i);
      btn.className = i === currentPage ? 'active' : '';
      btn.addEventListener('click', () => {
        currentPage = i;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      paginationEl.appendChild(btn);
    }
  }

  function applySearch() {
    const q = (searchEl?.value || '').trim().toLowerCase();
    if (!q) {
      filtered = allPosts.slice();
    } else {
      filtered = allPosts.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.join(' ').toLowerCase().includes(q)
      );
    }
    currentPage = 1;
    render();
  }

  async function init() {
    try {
      const resp = await fetch('/data/blog/index.json');
      const data = await resp.json();
      allPosts = data.posts.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
      filtered = allPosts.slice();
      render();
      if (searchEl) searchEl.addEventListener('input', applySearch);
    } catch (e) {
      listEl.innerHTML = '<p>Failed to load posts.</p>';
      console.error(e);
    }
  }

  init();
})();