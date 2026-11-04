const MENU_ITEMS = [
  { label: 'Trang chủ', href: 'index.html', pages: ['index.html'] },
  { label: 'Khám phá sách', href: 'products.html', pages: ['products.html', 'product-detail.html'] },
  { label: 'Giới thiệu nhà sách', href: 'about.html', pages: ['about.html'] },
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

const FOOTER_BOOK_LINKS = [
  { label: 'Truyện ngắn & Tiểu thuyết', href: categoryUrl('Truyện') },
  { label: 'Văn học kinh điển', href: categoryUrl('Văn học') },
  { label: 'Kinh tế – Kinh doanh', href: categoryUrl('Kinh tế – Kinh doanh') },
  { label: 'Đọc review & Trầm tích tư liệu', href: 'products.html' },
];

const FOOTER_ABOUT_LINKS = [
  'Câu chuyện Nhà Sách Mão',
  'Ký ức ông bà Mão',
  'Không gian gác 2 Đinh Lễ',
  'Tủ sách di sản bảo tồn',
  'Gửi gắm độc giả',
];

const ICON_PIN = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z"></path><circle cx="12" cy="9" r="2.5"></circle></svg>';
const ICON_BOOK = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><path d="M3 5h7a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H3zM21 5h-7a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h7z"></path></svg>';

function footerHTML() {
  const bookLinks = FOOTER_BOOK_LINKS
    .map((item) => `<li><a href="${item.href}">${escapeHTML(item.label)}</a></li>`)
    .join('');
  const aboutLinks = FOOTER_ABOUT_LINKS
    .map((label) => `<li><a href="about.html">${label}</a></li>`)
    .join('');

  return `
    <footer class="site-footer">
      <div class="container site-footer__grid">
        <div>
          <p class="site-footer__brand">Nhà Sách Mão</p>
          <p>Nơi lưu giữ ký ức và tình yêu sách trên gác hai phố Đinh Lễ, Hà Nội từ những năm 1990. Không gian văn hóa độc bản giữa lòng phố cổ nghìn năm văn hiến.</p>
          <span class="site-footer__badge">Mão Tuyển Chọn • Di Sản Đinh Lễ</span>
        </div>
        <div>
          <h2 class="site-footer__title">Khám phá tuyển tập</h2>
          <ul>${bookLinks}</ul>
        </div>
        <div>
          <h2 class="site-footer__title">Liên kết &amp; giới thiệu</h2>
          <ul>${aboutLinks}</ul>
        </div>
        <div>
          <h2 class="site-footer__title">Thông tin liên hệ</h2>
          <ul class="site-footer__contact">
            <li>${ICON_PIN}<span>Gác 2, số 5 Đinh Lễ, Tràng Tiền, Hoàn Kiếm, Hà Nội</span></li>
            <li>${ICON_BOOK}<span>Không gian đọc tự do &amp; Lưu trữ</span></li>
          </ul>
        </div>
      </div>
      <div class="container site-footer__bottom">
        <p>© Nhà Sách Mão • Không gian văn hóa đọc Đinh Lễ, Hà Nội. Website phi thương mại chia sẻ và lưu giữ tình yêu sách.</p>
        <p class="site-footer__quote">“Sách là ngọn đèn soi đường tri thức”</p>
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
