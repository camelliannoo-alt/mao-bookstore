{
  const section = document.getElementById('featured');
  const grid = document.getElementById('featured-books');
  const books = typeof BOOKS === 'undefined' ? [] : BOOKS;
  const featured = books.filter((book, i) => books.findIndex((b) => b.category === book.category) === i).slice(0, 3);

  if (featured.length) {
    grid.innerHTML = featured.map(bookCardHTML).join('');
  } else {
    section.hidden = true;
  }
}

{
  const blocks = [
    { name: 'Truyện', title: 'Thể Loại Truyện', cta: 'Mở tập truyện', theme: 'green', text: 'Những câu chuyện nuôi dưỡng trí tưởng tượng và thế giới nội tâm qua nhiều thế hệ bạn đọc thân thuộc.' },
    { name: 'Văn học', title: 'Thể Loại Văn Học', cta: 'Mở văn thi tập', theme: 'brown', text: 'Văn chương kinh điển Việt Nam và thế giới, những áng văn bất hủ vượt thời gian gợi mở chiều sâu nhân bản.' },
    { name: 'Kinh tế – Kinh doanh', title: 'Kinh Tế – Kinh Doanh', cta: 'Mở tủ sách kinh tế', theme: 'green', text: 'Tri thức quản trị, tư duy thị trường và bài học khởi nghiệp chọn lọc dành cho những bộ óc đổi mới và kiến tạo.' },
  ];
  const categories = typeof CATEGORIES === 'undefined' ? [] : CATEGORIES;

  document.getElementById('category-blocks').innerHTML = blocks.map((block, i) => {
    const found = categories.find((c) => c && c.name === block.name);
    const text = (found && found.description) || block.text;
    return `
      <a class="category-card category-card--${block.theme}" href="${categoryUrl(block.name)}">
        <span class="category-card__index">Mục lục 0${i + 1}</span>
        <h3>${block.title}</h3>
        <p>${escapeHTML(text)}</p>
        <span class="category-card__cta">${block.cta} →</span>
      </a>`;
  }).join('');
}
