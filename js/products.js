// Đợi DOM load xong để đảm bảo `BOOKS`, `CATEGORIES` và `bookCardHTML` đã có
document.addEventListener('DOMContentLoaded', () => {
  if (typeof BOOKS === 'undefined' || typeof CATEGORIES === 'undefined') {
    console.error("Thiếu file du-lieu.js. Hãy đảm bảo đã nạp file dữ liệu!");
    return;
  }

  // DOM Elements
  const grid = document.getElementById('products-grid');
  const emptyState = document.getElementById('empty-state');
  const bookCount = document.getElementById('book-count');
  const searchInput = document.getElementById('search-input');
  const searchForm = document.getElementById('search-form');
  const categoryFilters = document.getElementById('category-filters');
  const sortSelect = document.getElementById('sort-select');
  const clearFiltersBtn = document.getElementById('clear-filters-btn');
  const categoryDesc = document.getElementById('category-description');

  // Mô tả cho từng thể loại (TU-4.D)
  const descMap = {
    'all': 'Mỗi cuốn sách nằm trên kệ gỗ Đinh Lễ đều mang một câu chuyện riêng. Hãy chọn một thể loại và thả mình vào những trang viết sâu sắc, đượm màu thời gian và ký ức phố cổ.',
    'Truyện': 'Những mảnh ghép cuộc đời, những chuyến phiêu lưu kỳ thú và những cung bậc cảm xúc chân thực nhất được gửi gắm qua từng trang truyện.',
    'Văn học': 'Nơi lưu giữ những tinh hoa ngôn từ, những tác phẩm kinh điển đã vượt qua thử thách của thời gian để sống mãi trong lòng độc giả.',
    'Kinh tế – Kinh doanh': 'Kiến thức thực tiễn, tầm nhìn chiến lược và những bài học xương máu từ các doanh nhân, học giả hàng đầu thế giới.'
  };

  // Khởi tạo giao diện
  function init() {
    renderCategoryTabs();
    readURLParams();
    setupEventListeners();
  }

  // Render Tabs Thể Loại (TU-2.A)
  function renderCategoryTabs() {
    // Tab "Tất cả"
    const totalCount = BOOKS.length;
    let html = `<button type="button" class="filter-btn" data-category="all">
                  Tất cả sách <span class="filter-badge">${totalCount} tác phẩm</span>
                </button>`;
    
    // Các tab từ mảng CATEGORIES
    CATEGORIES.forEach(({ name: cat }) => {
      // Đếm số lượng sách thuộc thể loại này
      const count = BOOKS.filter(b => b.category === cat).length;
      html += `<button type="button" class="filter-btn" data-category="${escapeHTML(cat)}">
                 ${escapeHTML(cat)} <span class="filter-badge" style="display:none">${count}</span>
               </button>`;
    });
    
    categoryFilters.innerHTML = html;
  }

  // Đọc URL và áp dụng (TU-4.A)
  function readURLParams() {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q') || '';
    const cat = params.get('category') || 'all';

    searchInput.value = q;
    
    // Cập nhật giao diện tab
    const tabs = categoryFilters.querySelectorAll('.filter-btn');
    tabs.forEach(tab => {
      if (tab.dataset.category === cat) {
        tab.classList.add('is-active');
        // Hiện badge số lượng khi active
        const badge = tab.querySelector('.filter-badge');
        if(badge) badge.style.display = 'inline-block';
      } else {
        tab.classList.remove('is-active');
        const badge = tab.querySelector('.filter-badge');
        if(badge && tab.dataset.category !== 'all') badge.style.display = 'none';
      }
    });

    // Cập nhật câu mô tả
    categoryDesc.textContent = descMap[cat] || descMap['all'];

    executeFilter(q, cat, sortSelect.value);
  }

  // Logic lọc và sắp xếp trung tâm (TU-4.B)
  function executeFilter(query, category, sortType) {
    let results = [...BOOKS]; // Clone array tránh thay đổi gốc

    // Lọc theo thể loại
    if (category && category !== 'all') {
      results = results.filter(b => b.category === category);
    }

    // Lọc theo từ khóa (Tên sách hoặc Tác giả)
    if (query.trim() !== '') {
      const lowerQ = query.trim().toLowerCase();
      results = results.filter(b => 
        (b.title && b.title.toLowerCase().includes(lowerQ)) || 
        (b.author && b.author.toLowerCase().includes(lowerQ))
      );
    }

    // Sắp xếp (TU-2.C)
    if (sortType === 'az') {
      results.sort((a, b) => a.title.localeCompare(b.title, 'vi'));
    } else if (sortType === 'za') {
      results.sort((a, b) => b.title.localeCompare(a.title, 'vi'));
    } // 'default' thì giữ nguyên thứ tự trong BOOKS gốc

    renderBooks(results);
  }

  // Render lưới sách (TU-3.A)
  function renderBooks(booksToRender) {
    // Cập nhật số lượng đầu trang (TU-1)
    const countText = booksToRender.length < 10 ? `0${booksToRender.length}` : booksToRender.length;
    bookCount.textContent = `${countText} tác phẩm${booksToRender.length > 0 ? ' trứ danh' : ''}`;

    if (booksToRender.length === 0) {
      grid.innerHTML = '';
      grid.hidden = true;
      emptyState.hidden = false;
      return;
    }

    grid.hidden = false;
    emptyState.hidden = true;
    
    // Sử dụng bookCardHTML từ layout.js (Yêu cầu bắt buộc)
    grid.innerHTML = booksToRender.map(book => bookCardHTML(book)).join('');
  }

  // Cập nhật URL bằng History API (TU-4.C)
  function updateURL(query, category) {
    const url = new URL(window.location);
    
    if (query.trim()) url.searchParams.set('q', query.trim());
    else url.searchParams.delete('q');

    if (category && category !== 'all') url.searchParams.set('category', category);
    else url.searchParams.delete('category');

    window.history.pushState({ q: query, category: category }, '', url);
  }

  // Đăng ký sự kiện
  function setupEventListeners() {
    // Submit form tìm kiếm
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const currentCat = categoryFilters.querySelector('.is-active')?.dataset.category || 'all';
      const query = searchInput.value;
      updateURL(query, currentCat);
      readURLParams();
    });

    // Click chọn Thể loại
    categoryFilters.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      
      const category = btn.dataset.category;
      const query = searchInput.value;
      updateURL(query, category);
      readURLParams();
    });

    // Chọn sắp xếp
    sortSelect.addEventListener('change', () => {
      const currentCat = categoryFilters.querySelector('.is-active')?.dataset.category || 'all';
      const query = searchInput.value;
      executeFilter(query, currentCat, sortSelect.value);
    });

    // Nút xóa bộ lọc ở trạng thái trống
    clearFiltersBtn.addEventListener('click', () => {
      searchInput.value = '';
      sortSelect.value = 'default';
      updateURL('', 'all');
      readURLParams();
    });

    // Xử lý nút Back/Forward của trình duyệt (TU-4.C)
    window.addEventListener('popstate', () => {
      readURLParams();
    });
  }

  // Khởi động
  init();
});