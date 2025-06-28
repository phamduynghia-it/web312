// Danh sách các ảnh trong thư mục static (bạn thêm ảnh vào đây)
const imageList = [
    "static/a1.jpg",
    "static/a2.jpg",
    "static/a3.jpg",
    "static/a4.jpg",
    "static/a5.jpg",
    "static/a6.jpg",
    "static/a7.jpg",
    "static/a8.jpg",
    "static/a9.jpg",
    "static/a10.jpg",
    "static/a11.jpg",
    "static/a12.jpg",
    // Thêm đường dẫn ảnh khác nếu có
];

let currentIndex = 0;
const fallInterval = 1500; // 3 giây
const fallDuration = 5000; // Thời gian rơi (ms), chỉnh cho giống tốc độ chữ

function createFallingImage() {
    if (imageList.length === 0) return;
    const img = document.createElement("img");
    img.src = imageList[currentIndex];
    img.className = "falling-image";

    // Kích thước 1/4 màn hình mobile (giả sử mobile ~ 375px)
    const screenWidth = window.innerWidth;
    const imgSize = screenWidth / 4;

    // Đảm bảo ảnh giữ tỷ lệ khung hình ban đầu
    img.style.width = imgSize + "px";
    img.style.height = imgSize + "px"; // Set height cố định để tạo hình vuông
    img.style.objectFit = "cover"; // Đảm bảo ảnh lấp đầy container mà không bị méo
    img.style.position = "fixed";
    // Đảm bảo ảnh không bị rơi ra ngoài màn hình
    const minLeft = 0;
    const maxLeft = screenWidth - imgSize;
    img.style.left = Math.max(minLeft, Math.random() * maxLeft) + "px";
    img.style.top = "-" + imgSize + "px";
    img.style.zIndex = 1000;
    img.style.pointerEvents = "none";
    img.style.transition = `top ${fallDuration}ms linear`;

    document.body.appendChild(img);

    // Bắt đầu hiệu ứng rơi
    setTimeout(() => {
        img.style.top = window.innerHeight + "px";
    }, 50);

    // Xóa ảnh sau khi rơi xong
    setTimeout(() => {
        img.remove();
    }, fallDuration + 500);

    // Tăng index, quay lại 0 nếu hết ảnh
    currentIndex = (currentIndex + 1) % imageList.length;
}

// Khởi động hiệu ứng ảnh rơi mỗi 3s
setInterval(createFallingImage, fallInterval);

// Nếu muốn tạo ảnh rơi ngay khi load trang
window.addEventListener("DOMContentLoaded", createFallingImage);
