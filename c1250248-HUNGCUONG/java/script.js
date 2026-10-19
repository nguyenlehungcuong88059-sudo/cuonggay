
function datHang(tenSanPham) {
    alert('Đã thêm ' + tenSanPham + ' vào giỏ hàng. Biển Xanh sẽ liên hệ xác nhận đơn của bạn.');
}

function filterCategory(category, clickedButton) {
    document.querySelectorAll('.filter-btn').forEach(button => button.classList.remove('active'));
    if (clickedButton) {
        clickedButton.classList.add('active');
    }

    document.querySelectorAll('.product-card').forEach(product => {
        product.style.display = category === 'all' || product.classList.contains(category) ? '' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const formLienHe = document.getElementById('formLienHe') || document.querySelector('.contact-form');

    if (!formLienHe) {
        return;
    }

    formLienHe.addEventListener('submit', event => {
        event.preventDefault();

        const name = document.getElementById('name') || document.getElementById('ho-ten');
        const phone = document.getElementById('phone') || document.getElementById('so-dien-thoai');
        const message = document.getElementById('message') || document.getElementById('noi-dung');
        const formMessage = document.getElementById('form-message');
        const phoneValue = phone.value.replace(/\s/g, '');

        if (!/^0\d{9}$/.test(phoneValue)) {
            alert('Vui lòng nhập số điện thoại Việt Nam gồm 10 chữ số.');
            phone.focus();
            return;
        }

        if (!message.value.trim()) {
            alert('Vui lòng nhập nội dung cần hỗ trợ.');
            message.focus();
            return;
        }

        if (formMessage) {
            formMessage.textContent = 'Cảm ơn ' + name.value.trim() + '! Biển Xanh sẽ liên hệ lại sớm nhất.';
        } else {
            alert('Cảm ơn ' + name.value.trim() + '! Biển Xanh sẽ liên hệ lại sớm nhất.');
        }
        formLienHe.reset();
    });
});