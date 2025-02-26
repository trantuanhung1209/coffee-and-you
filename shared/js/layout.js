const mainContent = document.querySelector("#main-content");

// loader
window.onload = () => {
    // Giải phóng màn hình loading sau khi trang đã load xong
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 800); 
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

        const innerOrder = document.querySelector(".inner-order");
        if (innerOrder) {
            if (!window.location.pathname.includes("home")) {
                innerOrder.setAttribute("type", "button");
                innerOrder.classList.add("btn", "btn-primary");
                innerOrder.setAttribute("data-bs-toggle", "modal");
                innerOrder.setAttribute("data-bs-target", "#exampleModal");
            }
    
            innerOrder.addEventListener("click", (event) => {
                event.preventDefault(); 
    
                if (window.location.pathname.includes("home")) {
                    const section = document.getElementById("section-7");
                    if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                    }
                }
            });
        }
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

// popup-modal order 
const validatePhoneNumber = (phoneNumber) => {
    const re = /^[0-9]{10}$/;
    return re.test(phoneNumber);
}

const formatDate = (date) => {
    const dateObject = new Date(date);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    return `${day}/${month}/${year}`;
};
const popupModalOrder = () => {
    const popupModal = document.querySelector(".inner-popup");
    const popupModalTemplate = `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Điền thông tin đặt bàn</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="inner-content">
                        <div class="row">
                            <div class="col-12">
                                <form class="inner-form" id="myForm" action="/submit">
                                    <div class="inner-form-group">
                                        <label for="form-number">Số người</label>
                                        <input type="number" name="number" id="form-number">
                                    </div>
                                    <div class="inner-form-group">
                                        <label for="form-date">Ngày đặt</label>
                                        <input type="date" name="date" id="form-date">
                                    </div>
                                    <div class="inner-form-group">
                                        <label for="form-time">Thời gian</label>
                                        <input type="time" name="time" id="form-time">
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <label for="fullName">Họ tên</label>
                                            <input type="text" name="fullName" id="fullName">
                                        </div>
                                        <div class="col-6">
                                            <label for="phone">Số điện thoại</label>
                                            <input type="number" name="phone" id="phone">
                                        </div>
                                    </div>
                                    <div class="inner-form-group">
                                        <label for="form-note">Ghi chú</label>
                                        <textarea name="note" id="form-note" cols="30" rows="10"></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn button-close" data-bs-dismiss="modal">Close</button>
                    <button type="submit" form="myForm" class="inner-button">Đặt bàn</button>
                </div>
            </div>
        </div>
    </div>
    `;

    if (popupModal) {
        popupModal.innerHTML = popupModalTemplate;

        const innerForm = document.querySelector(".inner-form");
        if (innerForm) {
            innerForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const number = innerForm.number.value;
                const date = innerForm.date.value;
                const time = innerForm.time.value;
                const fullName = innerForm.fullName.value;
                const phone = innerForm.phone.value;
                const note = innerForm.note.value;

                if (!number || number <= 0) {
                    alert("Vui lòng nhập số người hợp lệ");
                    return;
                }

                if (!date) {
                    alert("Vui lòng chọn ngày đặt bàn");
                    return;
                }

                if (!time) {
                    alert("Vui lòng chọn thời gian đặt bàn");
                    return;
                }

                if (!fullName) {
                    alert("Vui lòng nhập họ tên");
                    return;
                }

                if (!phone || !validatePhoneNumber(phone)) {
                    alert("Vui lòng nhập số điện thoại hợp lệ");
                    return;
                }

                if (!note) {
                    alert("Vui lòng nhập ghi chú");
                    return;
                }

                if (number && date && time && fullName && phone && note) {
                    innerForm.reset();
                    const modalBackdrop = document.querySelector('.modal-backdrop');
                    if (modalBackdrop) { 
                        modalBackdrop.style.display = 'none';
                    }
                    const modalElement = document.getElementById('exampleModal');
                    const modalInstance = bootstrap.Modal.getInstance(modalElement); // Lấy instance của modal
                    if (modalInstance) {
                        modalInstance.hide(); // Đóng modal đúng cách
                    }
                    document.body.style.overflow = "auto"; 
                    document.body.style.paddingRight = "0px";
                }

                // Hiển thị popup xác nhận
                const sectionPopup = document.querySelector('.section-popup');
                if (sectionPopup) {
                    sectionPopup.style.display = 'flex';
                    sectionPopup.style.opacity = '1';
                    sectionPopup.style.pointerEvents = 'auto';

                    const popupBody = sectionPopup.querySelector('.inner-popup-body');
                    const popupContentTemplate = `
                    <p style="font-weight: 700; margin-bottom: 20px; font-size: 18px;">
                        Thông tin đặt bàn của bạn đã được xác nhận! 🎉
                    </p>
                    <div class="inner-info">
                        <p><b>Xin chào</b> &nbsp; <span>${fullName}</span></p>
                        <p>Chúng tôi rất vui được thông báo rằng đặt bàn của bạn đã được xác nhận với thông tin sau:
                        </p>
                        <p><b>Tên:</b> &nbsp; <span>${fullName}</span></p>
                        <p><b>Số điện thoại:</b> &nbsp; <span>${phone}</span></p>
                        <p><b>Ngày:</b> &nbsp; <span>${formatDate(date)}</span></p>
                        <p><b>Giờ:</b> &nbsp; <span>${time}</span></p>
                        <p><b>Số lượng người:</b> &nbsp; <span>${number}</span></p>
                        <p>
                            <b>Lưu ý</b>: Vui lòng đến trước 15 phút để đảm bảo trải nghiệm tốt nhất. Nếu cần thay
                            đổi hoặc hủy đặt bàn,
                            vui lòng liên hệ qua số
                            <a href="tel:0353133235" style="color: var(--background-color-button);">0353133235</a>.
                        </p>
                        <p>Cảm ơn và hẹn gặp lại bạn sớm!</p>
                    </div>
                    <div class="inner-action">
                        <button class="inner-button">Xác nhận</button>
                    </div>
                    `;
                    popupBody.innerHTML = popupContentTemplate;

                    // Đóng popup khi nhấn nút "Xác nhận" hoặc nút đóng
                    const closePopup = () => {
                        sectionPopup.style.display = 'none';
                        sectionPopup.style.opacity = '0';
                        sectionPopup.style.pointerEvents = 'none';
                    };

                    popupBody.querySelector('.inner-button').addEventListener('click', closePopup);
                    sectionPopup.querySelector('.inner-popup-close').addEventListener('click', closePopup);

                    sectionPopup.querySelector('.inner-popup-content').addEventListener('click', (e) => {
                        e.stopPropagation();
                    });

                    // Đóng popup khi click bên ngoài
                    sectionPopup.addEventListener('click', closePopup);
                }
            });
        }
    }
};
popupModalOrder();
// end popup-modal order