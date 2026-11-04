const MENU_ITEMS = [
  { label: 'Trang chủ', href: 'index.html', pages: ['index.html'] },
  { label: 'Khám phá sách', href: 'products.html', pages: ['products.html', 'product-detail.html'] },
  { label: 'Giới thiệu nhà sách', href: 'about.html', pages: ['about.html'] },
];

const CATEGORY_NAMES = ['Truyện', 'Văn học', 'Kinh tế – Kinh doanh'];

function escapeHTML(text) {
  return String(text ?? '').replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[ch]));
}

function categoryUrl(category) {
  return 'products.html?category=' + encodeURIComponent(category);
}

function bookUrl(id) {
  return 'product-detail.html?id=' + encodeURIComponent(id);
}

function coverHTML(book) {
  if (book.image) {
    return `<div class="cover"><img src="${escapeHTML(book.image)}" alt="Bìa sách ${escapeHTML(book.title)}" loading="lazy"></div>`;
  }
  return `<div class="cover cover--placeholder" style="background-color: ${escapeHTML(book.color)}"><span class="cover__title">${escapeHTML(book.title)}</span></div>`;
}

function bookCardHTML(book) {
  const url = bookUrl(book.id);
  return `
    <article class="book-card">
      <a class="book-card__cover" href="${url}" tabindex="-1" aria-hidden="true">${coverHTML(book)}</a>
      <div class="book-card__body">
        <h3 class="book-card__title">${escapeHTML(book.title)}</h3>
        <p class="book-card__author">${escapeHTML(book.author)}</p>
        <span class="chip">${escapeHTML(book.category)}</span>
        <a class="btn btn--small" href="${url}">Xem chi tiết</a>
      </div>
    </article>`;
}

function isActiveItem(item) {
  const page = location.pathname.split('/').pop() || 'index.html';
  return item.pages.includes(page);
}

function headerHTML() {
  const links = MENU_ITEMS.map((item) => {
    const active = isActiveItem(item) ? ' class="is-active" aria-current="page"' : '';
    return `<li><a href="${item.href}"${active}>${item.label}</a></li>`;
  }).join('');

  return `
    <header class="site-header">
      <div class="container site-header__inner">
        <a class="site-logo" href="index.html">
          <span class="site-logo__name">Nhà Sách Mão</span>
          <span class="site-logo__tag">GÁC 2 • SỐ 5 ĐINH LỄ</span>
        </a>
        <button class="site-header__toggle" type="button" aria-expanded="false" aria-controls="site-menu">Menu</button>
        <div class="site-header__menu" id="site-menu">
          <nav class="site-nav" aria-label="Menu chính">
            <ul>${links}</ul>
          </nav>
          <form class="site-search" action="products.html" method="get" role="search">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-4-4"></path></svg>
            <input type="search" name="q" placeholder="Tìm sách, tác giả..." aria-label="Tìm sách, tác giả">
          </form>
        </div>
      </div>
    </header>`;
}

function footerHTML() {
  const categoryLinks = CATEGORY_NAMES
    .map((name) => `<li><a href="${categoryUrl(name)}">${escapeHTML(name)}</a></li>`)
    .join('');

  return `
    <footer class="site-footer">
      <div class="container site-footer__inner">
        <div>
          <h2 class="site-footer__title">Nhà sách Mão</h2>
          <p>Hiệu sách trên gác hai phố Đinh Lễ, Hoàn Kiếm, Hà Nội.</p>
        </div>
        <div>
          <h2 class="site-footer__title">Thể loại</h2>
          <ul>${categoryLinks}</ul>
        </div>
        <div>
          <h2 class="site-footer__title">Ghé thăm</h2>
          <ul>
            <li><a href="about.html">Giới thiệu</a></li>
            <li><a href="about.html#lien-he">Liên hệ</a></li>
          </ul>
        </div>
        <p class="site-footer__note">Bài tập nhóm môn Thiết kế Web.</p>
      </div>
    </footer>`;
}

{
  const headerSlot = document.getElementById('site-header');
  const footerSlot = document.getElementById('site-footer');
  if (headerSlot) {
    headerSlot.innerHTML = headerHTML();
    const toggle = headerSlot.querySelector('.site-header__toggle');
    const menu = headerSlot.querySelector('.site-header__menu');
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open);
    });
  }
  if (footerSlot) footerSlot.innerHTML = footerHTML();
}
