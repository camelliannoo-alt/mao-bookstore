// Tiêu đề và gợi ý độc giả lấy từ bản biên soạn của nhóm.
const reviewInfo = {
  'de-men-phieu-luu-ky': {
    title: 'Dế Mèn học cách lớn lên',
    credit: 'Ngọc Linh, Nhóm 8',
    audience: ['Trẻ em thích thiên nhiên và phiêu lưu', 'Cha mẹ và người hướng dẫn đọc sách', 'Người muốn đọc lại sách tuổi thơ'],
  },
  'cho-toi-xin-mot-ve-tuoi-tho': {
    title: 'Đọc lại những ngày còn bé',
    credit: 'Ngọc Linh, Nhóm 8',
    audience: ['Bạn đọc tuổi thiếu niên', 'Người lớn muốn nhớ lại tuổi thơ', 'Cha mẹ và người làm giáo dục'],
  },
  'truyen-kieu': {
    title: 'Tiếng thở dài của một kiếp hồng nhan',
    credit: 'Ngọc Linh, Nhóm 8',
    audience: ['Người yêu văn học Việt Nam cổ điển', 'Học sinh, sinh viên đọc cùng bản chú giải', 'Bạn đọc quan tâm đến văn hóa Việt'],
  },
  'tat-den': {
    audience: ['Học sinh, sinh viên tìm hiểu văn học hiện thực phê phán', 'Bạn đọc quan tâm đến đời sống nông thôn và thân phận người phụ nữ'],
  },
  'tu-tot-den-vi-dai': {
    audience: ['Sinh viên kinh tế và quản trị kinh doanh', 'Người quản lý và xây dựng đội ngũ'],
  },
  'tiep-thi-6-0': {
    audience: ['Sinh viên marketing và truyền thông', 'Người làm marketing và quản lý thương hiệu', 'Bạn đọc quan tâm đến công nghệ và kinh doanh'],
  },
};

const byId = id => document.getElementById(id);
const setText = (id, text) => { byId(id).textContent = text; };

function showError(title, message) {
  setText('detail-error-title', title);
  setText('detail-error-message', message);
  document.querySelector('.detail-error').hidden = false;
}

function renderBook(book) {
  document.title = `${book.title} – Nhà sách Mão`;
  setText('breadcrumb-title', book.title);
  setText('book-title', book.title);
  setText('book-author', book.author);
  setText('book-description', book.description);
  setText('book-category', book.category);
  setText('book-year', book.year ?? 'Chưa xác minh');
  setText('book-publisher', book.publisher || 'Chưa cập nhật');
  setText('book-status', book.status === 'active' ? 'Có trong danh mục' : (book.status || 'Chưa cập nhật'));

  const tags = Array.isArray(book.tag) ? book.tag : [book.tag].filter(Boolean);
  byId('book-cover').innerHTML = coverHTML(book);
  setText('book-ribbon', tags[0]);
  byId('book-ribbon').hidden = !tags.length;
  byId('book-labels').innerHTML = [book.category, ...tags]
    .map(label => `<span class="chip">${escapeHTML(label)}</span>`).join('');

  const backLink = byId('back-to-products');
  backLink.href = categoryUrl(book.navigation?.backCategory || book.category);
  backLink.textContent = `← ${book.navigation?.backButton || 'Quay lại danh mục sách'}`;
  setText('book-note', book.navigation?.note || '');
  byId('book-note').hidden = !book.navigation?.note;

  document.querySelector('.detail-top').hidden = false;
}

function paragraphsHTML(paragraphs = []) {
  return paragraphs.map(paragraph => `<p>${escapeHTML(paragraph)}</p>`).join('');
}

function renderReview(book) {
  if (!Array.isArray(book.review) || book.review.length === 0) return;

  const info = reviewInfo[book.id];
  setText('review-title', info?.title || `Đọc ${book.title}`);
  setText('review-credit', `Người biên soạn: ${info?.credit || 'Nhóm 8'}`);

  const sections = book.review.map(section => {
    const notes = (section.callouts || []).map(note => `
      <div class="review-note">
        <h4>${escapeHTML(note.title)}</h4>
        <p>${escapeHTML(note.content)}</p>
      </div>`).join('');

    const quote = section.quote?.content ? `
      <blockquote class="review-quote">
        <p>${escapeHTML(section.quote.content)}</p>
        ${section.quote.source ? `<cite>${escapeHTML(section.quote.source)}</cite>` : ''}
      </blockquote>` : '';

    return `
      <section class="review-section">
        <h3>${escapeHTML(section.heading)}</h3>
        ${paragraphsHTML(section.paragraphs)}
        ${notes ? `<div class="review-notes">${notes}</div>` : ''}
        ${quote}
        ${paragraphsHTML(section.paragraphsAfterQuote)}
      </section>`;
  });

  const audience = info?.audience || [];
  if (audience.length) {
    sections.push(`
      <section class="review-readers">
        <h3>Ai nên đọc?</h3>
        <ul class="review-audience">${audience.map(reader => `<li>${escapeHTML(reader)}</li>`).join('')}</ul>
      </section>`);
  }
  byId('review-content').innerHTML = sections.join('');
  document.querySelector('.detail-review').hidden = false;
}

function renderRelated(book, booksByCategory) {
  const related = booksByCategory.filter(other => other.id !== book.id).slice(0, 3);
  if (!related.length) return;
  byId('related-books').innerHTML = related.map(bookCardHTML).join('');
  document.querySelector('.detail-related').hidden = false;
}

function showDetailPage() {
  const id = new URLSearchParams(location.search).get('id')?.trim();
  if (!id) {
    showError('Không tìm thấy sách', 'Hãy chọn một quyển từ danh mục sách.');
    return;
  }

  if (typeof BOOKS === 'undefined') {
    showError('Chưa tải được dữ liệu sách', 'Vui lòng tải lại trang hoặc quay về danh mục sách.');
    return;
  }

  const book = getBookById(id);
  if (!book) {
    showError('Không tìm thấy sách', 'Đường dẫn này không khớp với quyển nào trong danh mục.');
    return;
  }

  renderBook(book);
  renderReview(book);
  renderRelated(book, getBooksByCategory(book.category));
}

showDetailPage();
