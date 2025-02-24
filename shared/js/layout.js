const mainContent = document.querySelector("#main-content");

// loader
window.onload = () => {
    // Giải phóng màn hình loading sau khi trang đã load xong
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 800); // Thời gian loading (3 giây)
};
// end loader

// header
const header = () => {
    const header  = mainContent.querySelector(".inner-header");
    const headerTemplate = `
    <div class="container">
        <div class="inner-wrap">
            <div class="inner-logo">
                <a href="../home/">
                    <img src="../../assets/images/logo/logo-main.png" alt="coffee">
                </a>
            </div>
            <nav class="inner-menu">
                <ul>
                    <li>
                        <a href="../home/">Trang chủ</a>
                    </li>
                    <li>
                        <a href="../about/">Giới thiệu</a>
                    </li>
                    <li>
                        <a href="../news/">Tin tức</a>
                    </li>
                    <li>
                        <a href="../store/">Cửa hàng</a>
                    </li>
                    <li>
                        <a href="../contact/">Liên hệ</a>
                    </li>
                </ul>
            </nav>
            <div class="inner-action">
                <div class="inner-search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div class="inner-cart">
                    <i class="fa-solid fa-shopping-cart"></i>
                </div>
                <div class="inner-user">
                    <i class="fa-solid fa-user"></i>
                </div>
                <button class="inner-order">
                    Đặt hàng
                </button>
            </div>
        </div>
    </div>
    `;

    if(header) {
        header.innerHTML = headerTemplate;
    }
}
header();
// end header

// footer
// function footer() {
// }

const footer = () => {
    const footerElement = document.querySelector(".inner-footer");
    const footerTemplate = `
    <div class="container">
        <h2 class="inner-title">
            Ghé thăm cửa hàng
        </h2>
        <h3 class="inner-sub-title">
            Ngày hôm nay
        </h3>
        <div class="inner-logo">
            <img src="../../assets/images/logo/logo-cup.png" alt="logo">
        </div>
        <div class="inner-button">
            <a href="../store/">
                Vào shop cafe!
            </a>
        </div>
        <nav class="inner-menu-footer">
            <ul>
                <li>
                    <a href="../home/">
                        Trang chủ
                    </a>
                </li>
                <li>
                    <a href="../store/">
                        Cửa hàng
                    </a>
                </li>
                <li>
                    <a href="../about/">
                        Giới thiệu
                    </a>
                </li>
                <li>
                    <a href="../contact/">
                        Liên hệ
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    `;

    if (footerElement) {
        footerElement.innerHTML = footerTemplate;
    }
}
footer();
