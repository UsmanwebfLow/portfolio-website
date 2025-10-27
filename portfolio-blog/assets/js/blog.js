(() => {
  const POSTS_INDEX_URL = './data/posts.json';

  async function fetchJson(url) {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed to fetch ${url}`);
    return res.json();
  }

  function createTagPills(tags) {
    const frag = document.createDocumentFragment();
    (tags || []).forEach(tag => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = tag;
      frag.appendChild(span);
    });
    return frag;
  }

  function formatDate(iso) {
    const date = new Date(iso);
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  }

  function estimateReadingTime(text) {
    const words = text.split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.round(words / 200));
    return `${minutes} min read`;
  }

  // Home teasers
  async function renderHomeTeasers() {
    const container = document.getElementById('homeBlogTeasers');
    if (!container) return;
    try {
      const posts = await fetchJson(POSTS_INDEX_URL);
      const latest = posts.slice(0, 3);
      container.innerHTML = '';
      latest.forEach(post => {
        const a = document.createElement('a');
        a.href = `./post.html?slug=${encodeURIComponent(post.slug)}`;
        a.className = 'post-item card';
        a.innerHTML = `
          <div class="card-body">
            <h3>${post.title}</h3>
            <p class="post-meta">${formatDate(post.date)} · ${estimateReadingTime(post.excerpt || '')}</p>
            <p>${post.excerpt || ''}</p>
          </div>
        `;
        container.appendChild(a);
      });
    } catch (err) {
      console.error(err);
      container.textContent = 'Failed to load posts.';
    }
  }

  // Blog list page
  async function renderBlogList() {
    const list = document.getElementById('postsList');
    const pagination = document.getElementById('postsPagination');
    const searchInput = document.getElementById('searchInput');
    if (!list || !pagination || !searchInput) return;

    let posts = [];
    try {
      posts = await fetchJson(POSTS_INDEX_URL);
    } catch (err) {
      list.textContent = 'Failed to load posts.';
      return;
    }

    let query = '';
    let page = 1;
    const pageSize = 6;

    function applyFilterAndRender() {
      const filtered = posts.filter(p => {
        const text = `${p.title} ${p.tags?.join(' ') || ''} ${p.excerpt || ''}`.toLowerCase();
        return text.includes(query.toLowerCase());
      });
      const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
      page = Math.max(1, Math.min(page, totalPages));
      const start = (page - 1) * pageSize;
      const slice = filtered.slice(start, start + pageSize);

      list.innerHTML = '';
      slice.forEach(post => {
        const item = document.createElement('article');
        item.className = 'post-item';
        const a = document.createElement('a');
        a.href = `./post.html?slug=${encodeURIComponent(post.slug)}`;
        a.innerHTML = `<h3>${post.title}</h3>`;
        const meta = document.createElement('p');
        meta.className = 'post-meta';
        meta.textContent = `${formatDate(post.date)} · ${estimateReadingTime(post.excerpt || '')}`;
        const p = document.createElement('p');
        p.textContent = post.excerpt || '';
        const tags = document.createElement('div');
        tags.className = 'post-tags';
        tags.appendChild(createTagPills(post.tags || []));
        item.append(a, meta, p, tags);
        list.appendChild(item);
      });

      pagination.innerHTML = '';
      for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = `btn btn-sm ${i === page ? 'btn-primary' : ''}`;
        btn.textContent = String(i);
        btn.addEventListener('click', () => { page = i; applyFilterAndRender(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
        pagination.appendChild(btn);
      }
    }

    searchInput.addEventListener('input', (e) => {
      query = e.target.value;
      page = 1;
      applyFilterAndRender();
    });

    applyFilterAndRender();
  }

  // Post page
  async function renderPostPage() {
    const content = document.getElementById('postContent');
    const titleEl = document.getElementById('postTitle');
    const dateEl = document.getElementById('postDate');
    const readingEl = document.getElementById('postReadingTime');
    const tagsEl = document.getElementById('postTags');
    if (!content || !titleEl || !dateEl || !readingEl || !tagsEl) return;

    const params = new URLSearchParams(location.search);
    const slug = params.get('slug');
    if (!slug) {
      content.textContent = 'Post not found.';
      return;
    }

    try {
      const posts = await fetchJson(POSTS_INDEX_URL);
      const meta = posts.find(p => p.slug === slug);
      if (!meta) throw new Error('Not found');
      titleEl.textContent = meta.title;
      dateEl.textContent = formatDate(meta.date);
      tagsEl.appendChild(createTagPills(meta.tags || []));

      const mdUrl = `./posts/${encodeURIComponent(slug)}.md`;
      const res = await fetch(mdUrl, { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to load markdown');
      const markdown = await res.text();
      const html = (window.marked ? window.marked.parse(markdown) : `<pre>${markdown.replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]))}</pre>`);
      content.innerHTML = html;
      readingEl.textContent = estimateReadingTime(markdown);
    } catch (err) {
      console.error(err);
      content.textContent = 'Failed to load post.';
    }
  }

  // Init
  renderHomeTeasers();
  renderBlogList();
  renderPostPage();
})();