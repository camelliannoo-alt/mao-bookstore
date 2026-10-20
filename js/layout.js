const MENU_ITEMS = [
  { label: 'Trang chủ', page: 'index.html' },
  { label: 'Truyện', category: 'Truyện' },
  { label: 'Văn học', category: 'Văn học' },
  { label: 'Kinh tế – Kinh doanh', category: 'Kinh tế – Kinh doanh' },
  { label: 'Giới thiệu', page: 'about.html' },
];

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
  if (item.page) return item.page === page;
  const current = new URLSearchParams(location.search).get('category');
  return page === 'products.html' && item.category === current;
}

function headerHTML() {
  const links = MENU_ITEMS.map((item) => {
    const href = item.page || categoryUrl(item.category);
    const active = isActiveItem(item) ? ' class="is-active" aria-current="page"' : '';
    return `<li><a href="${href}"${active}>${escapeHTML(item.label)}</a></li>`;
  }).join('');

  return `
    <header class="site-header">
      <div class="container site-header__inner">
        <a class="site-logo" href="index.html">Nhà sách Mão</a>
        <nav class="site-nav" aria-label="Menu chính">
          <ul>${links}</ul>
        </nav>
      </div>
    </header>`;
}

function footerHTML() {
  const categoryLinks = MENU_ITEMS.filter((item) => item.category)
    .map((item) => `<li><a href="${categoryUrl(item.category)}">${escapeHTML(item.label)}</a></li>`)
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
  if (headerSlot) headerSlot.innerHTML = headerHTML();
  if (footerSlot) footerSlot.innerHTML = footerHTML();
}
