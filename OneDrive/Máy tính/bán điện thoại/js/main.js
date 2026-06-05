// ==========================================
// 1. XỬ LÝ CHUNG: Nút thêm vào giỏ hàng
// ==========================================
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert("Đã thêm sản phẩm vào giỏ hàng thành công!");
    });
});


// ==========================================
// 2. TRANG ĐĂNG NHẬP: Kiểm tra dữ liệu Form
// ==========================================
const loginForm = document.getElementById('loginForm');

// Chỉ chạy nếu đang ở trang Đăng nhập (có form loginForm)
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Chặn hành vi tải lại trang mặc định
        
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;

        if (user === "" || pass === "") {
            alert("Vui lòng điền đầy đủ tên đăng nhập và mật khẩu!");
        } else if (user === "admin" && pass === "123456") {
            alert("Đăng nhập thành công! Chào mừng admin.");
            window.location.href = "index.html"; // Chuyển hướng về trang chủ
        } else {
            alert("Sai tên đăng nhập hoặc mật khẩu.");
        }
    });
}


// ==========================================
// 3. TRANG CHI TIẾT SẢN PHẨM: Lấy dữ liệu động theo URL
// ==========================================
const phoneTitleEl = document.getElementById("phone-title");

// Chỉ chạy đoạn code này nếu đang ở trang Chi tiết (có id phone-title)
if (phoneTitleEl) {
    // Kho dữ liệu (Mock Data)
    const phoneData = {
        "iphone": {
            title: "iPhone 15 Pro Max 256GB",
            price: "34.990.000 đ",
            img: "https://via.placeholder.com/300x400?text=iPhone+15",
            specs: [
                "Màn hình: 6.7 inch, Super Retina XDR OLED",
                "Hệ điều hành: iOS 17",
                "Chip: Apple A17 Pro",
                "RAM: 8 GB",
                "Bộ nhớ trong: 256 GB"
            ]
        },
        "samsung": {
            title: "Samsung Galaxy S24 Ultra",
            price: "33.990.000 đ",
            img: "https://via.placeholder.com/300x400?text=Samsung+S24",
            specs: [
                "Màn hình: 6.8 inch, Dynamic AMOLED 2X",
                "Hệ điều hành: Android 14",
                "Chip: Snapdragon 8 Gen 3 for Galaxy",
                "RAM: 12 GB",
                "Bộ nhớ trong: 256 GB"
            ]
        },
        "xiaomi": {
            title: "Xiaomi 14 5G",
            price: "22.990.000 đ",
            img: "https://via.placeholder.com/300x400?text=Xiaomi+14",
            specs: [
                "Màn hình: 6.36 inch, OLED, 120Hz",
                "Hệ điều hành: Android 14 (HyperOS)",
                "Chip: Snapdragon 8 Gen 3",
                "RAM: 12 GB",
                "Bộ nhớ trong: 256 GB"
            ]
        },
        "oppo": {
            title: "Oppo Find N3 Flip",
            price: "25.990.000 đ",
            img: "https://via.placeholder.com/300x400?text=Oppo+Find+N3",
            specs: [
                "Màn hình: Chính 6.8 inch & Phụ 3.26 inch",
                "Hệ điều hành: Android 13",
                "Chip: MediaTek Dimensity 9200",
                "RAM: 12 GB",
                "Bộ nhớ trong: 256 GB"
            ]
        }
    };

    // Lấy ID từ thanh địa chỉ (Ví dụ: ?id=samsung thì lấy chữ samsung)
    const urlParams = new URLSearchParams(window.location.search);
    const phoneId = urlParams.get('id');

    // Nếu ID hợp lệ thì lấy dữ liệu, nếu không thì mặc định là iphone
    const currentPhone = phoneData[phoneId] || phoneData["iphone"];

    // Đổ dữ liệu ra HTML
    phoneTitleEl.innerText = currentPhone.title;
    document.getElementById("phone-price").innerText = currentPhone.price;
    document.getElementById("phone-img").src = currentPhone.img;
    document.getElementById("phone-img").alt = currentPhone.title;

    // Xử lý riêng phần cấu hình (Tạo các thẻ <li>)
    const specsContainer = document.getElementById("phone-specs");
    specsContainer.innerHTML = ""; // Xóa rỗng trước khi thêm mới
    
    currentPhone.specs.forEach(spec => {
        const li = document.createElement("li");
        li.innerText = spec;
        li.style.marginBottom = "5px";
        specsContainer.appendChild(li);
    });
}


function closePopup() {
    document.getElementById("supportPopup").style.display = "none";
}