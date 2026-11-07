/**
 * Tệp JavaScript xử lý các tương tác trên trang About
 * - Xử lý Form Liên Hệ (Contact Form)
 */

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contactForm');
    
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Ngăn chặn reload trang
            
            let isValid = true;
            
            // Lấy các element
            const fullnameField = document.getElementById('fullname');
            const emailField = document.getElementById('email');
            const messageField = document.getElementById('message');
            
            // Hàm helper để set trạng thái lỗi
            const setError = (element, isError) => {
                const parent = element.closest('.field');
                if(isError) {
                    parent.classList.add('field--error');
                    isValid = false;
                } else {
                    parent.classList.remove('field--error');
                }
            };

            // Validate Tên
            if(fullnameField.value.trim() === '') {
                setError(fullnameField, true);
            } else {
                setError(fullnameField, false);
            }
            
            // Validate Email bằng Regex cơ bản
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(emailField.value.trim() === '' || !emailRegex.test(emailField.value.trim())) {
                setError(emailField, true);
            } else {
                setError(emailField, false);
            }
            
            // Validate Message
            if(messageField.value.trim() === '') {
                setError(messageField, true);
            } else {
                setError(messageField, false);
            }
            
            // Nếu form hợp lệ (Demo success message)
            if(isValid) {
                // Trong thực tế sẽ dùng fetch() hoặc XMLHttpRequest gửi data lên server
                // Ở đây là frontend demo, chỉ hiển thị thông báo thành công
                const successMsg = document.getElementById('formSuccess');
                successMsg.classList.remove('hidden');
                
                // Ẩn thông báo sau 3 giây và reset form
                setTimeout(() => {
                    successMsg.classList.add('hidden');
                    contactForm.reset();
                }, 3000);
            }
        });

        // Xóa class error khi người dùng bắt đầu type
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                const parent = this.closest('.field');
                if(parent.classList.contains('field--error')) {
                    parent.classList.remove('field--error');
                }
            });
        });
    }
});