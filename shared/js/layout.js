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
    const headerElement  = mainContent.querySelector(".inner-header");
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

                    <div class="inner-search-box">
                        <h2 class="inner-title">
                            Tìm kiếm sản phẩm 
                        </h2>
                        <form class="inner-form-search">
                            <input type="text" placeholder="Tìm kiếm..." name="content" autocomplete="off">
                            <a href="#" class="inner-search-button">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </a>
                        </form>
                    </div>
                </div>
                <div class="inner-cart">
                    <i class="fa-solid fa-shopping-cart"></i>

                    <div class="inner-quantity-total">
                        1
                    </div>

                    <div class="inner-cart-box">
                        <div class="inner-list-product">
                            <div class="inner-item">
                                <div class="inner-image">
                                    <a href="../productDetail/">
                                        <img src="../../assets/images/products/colombiadecafproduktbildhemsid.jpg" alt='' />
                                    </a>
                                </div>
                                <div class="inner-text">
                                    <h3 class="inner-name">
                                        <a href="../productDetail/">Cafe Legend</a>
                                    </h3>
                                    <p class="inner-quantity">
                                        Số lượng: 12
                                    </p>
                                </div>
                                <div class="inner-action">
                                    <p class="inner-price">
                                        999.0000đ
                                    </p>
                                    <div class="inner-remove">
                                        <i class="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="inner-total">
                            <p>
                                <span>Tổng cộng:</span> 
                                <span>999.000đ</span>
                            </p>
                            <div class="inner-button">
                                <div class="inner-button-checkout">
                                    Thanh toán
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="inner-user">
                    <i class="fa-solid fa-user"></i>

                    <div class="inner-dropdown-user">
                        <a href="../login/">Đăng nhập</a>
                        <a href="../register/">Đăng ký</a>
                    </div>
                </div>
                <button class="inner-order">
                    Đặt bàn
                </button>
            </div>
        </div>
    </div>
    `;

    if(headerElement) {
        headerElement.innerHTML = headerTemplate;

        const listMenu = headerElement.querySelectorAll(".inner-menu ul li a");
        if (listMenu) {
            listMenu.forEach(item => {
                if (window.location.href.includes(item.href)) {
                    item.classList.add("active");
                }
            });
        }

        // search
        const innerSearch = document.querySelector(".inner-search");
        const innerSearchBox = document.querySelector(".inner-search-box");

        innerSearch.addEventListener("click", (event) => {
            innerSearchBox.style.display = "block";
            event.stopPropagation();
        });

        document.addEventListener("click", (event) => {
            if (!innerSearchBox.contains(event.target) && !innerSearch.contains(event.target)) {
                innerSearchBox.style.display = "none";
            }
        });
    }
}
header();
// end header

// footer
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
                        Giới thiệu
                    </a>
                </li>
                <li>
                    <a href="../about/">
                        Cửa hàng 
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
// end footer

// copy right
const copyRight = () => {
    const copyRightElement = document.querySelector(".inner-copy-right");
    const copyRightTemplate = `
    <div class="container">
        <p>
            &copy; 2025 Coffee And You. Bản quyền thuộc về Group 5.
        </p>
    </div>

    <div class="inner-scroller">
        <i class="fas fa-chevron-up"></i>
    </div>
    `;

    if (copyRightElement) {
        copyRightElement.innerHTML = copyRightTemplate;

        const scroller = copyRightElement.querySelector(".inner-scroller");
        if (scroller) {
            scroller.addEventListener("click", () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });
        }
    }
};
copyRight();
// end copy right