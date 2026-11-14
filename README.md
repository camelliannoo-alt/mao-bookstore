# Nhà sách Mão

Website giới thiệu sách của hiệu sách gác hai số 5 phố Đinh Lễ, Hà Nội. Bài tập nhóm môn Thiết kế Web.

Website có 3 thể loại: Truyện, Văn học, Kinh tế – Kinh doanh. Không có giỏ hàng, thanh toán hay đặt hàng.

## Chạy thử

Website là HTML, CSS và JavaScript thuần, không cần cài đặt hay build.

1. Clone repo:

   ```bash
   git clone https://github.com/camelliannoo-alt/mao-bookstore.git
   ```

2. Mở thư mục bằng VS Code, bấm chuột phải vào `index.html` và chọn **Open with Live Server**.

Nên dùng Live Server thay vì mở file trực tiếp, để đường dẫn ảnh và script hoạt động đúng.

## Các trang

| Trang | File | Nội dung |
| --- | --- | --- |
| Trang chủ | `index.html` | Banner, kệ 3 thể loại, sách nổi bật |
| Sản phẩm | `products.html` | Danh sách sách, lọc theo thể loại (`?category=...`) |
| Chi tiết sách | `product-detail.html` | Thông tin một cuốn sách |
| Giới thiệu | `about.html` | Giới thiệu nhà sách |

## Cấu trúc thư mục

```
mao-bookstore/
├── index.html
├── products.html
├── product-detail.html
├── about.html
├── _template.html      khung mẫu để tạo trang mới
├── css/
│   ├── base.css        biến màu, font, header, footer, thành phần dùng chung
│   └── home.css, products.css, detail.css, about.css
├── js/
│   ├── layout.js       dựng header, footer, menu
│   ├── books.js        dữ liệu sách và thể loại
│   └── home.js, products.js, detail.js, about.js
└── images/             ảnh bìa sách và ảnh các trang
```
