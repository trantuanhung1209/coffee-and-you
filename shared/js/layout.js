const mainContent = document.querySelector("#main-content");

//data products
const products = [
    {
        id: 1,
        name: "Cafe Legend",
        price: 999000,
        image: "../../assets/images/products/colombiadecafproduktbildhemsid.jpg",
        description: "Cà phê hòa tan hương vị đậm đà, thơm ngon, đặc biệt phù hợp với người thích hương vị đắng."
    },
    {
        id: 2,
        name: "Cà phê SÁNG TẠO 8",
        price: 199000,
        image: "../../assets/images/products/bellaproduktbild5721x3455326x5-187fb7cc-7aa1-40b8-b27d-0e896bf519f3.jpg",
        description: "Cà phê hòa tan hương vị đậm đà, thơm ngon, đặc biệt phù hợp với người thích hương vị đắng."
    },
    {
        id: 3,
        name: "Hộp quà LEGEND",
        price: 969000,
        image: "../../assets/images/products/bourbonjungleproduktbild5721x3-9162173b-31d3-46b2-a303-56f78b557aca.jpg",
        description: "Cà phê hòa tan hương vị đậm đà, thơm ngon, đặc biệt phù hợp với người thích hương vị đắng."
    },
    {
        id: 4,
        name: "Cà phê Chế Phin Loại 1",
        price: 960000,
        image: "../../assets/images/products/buenavistaproduktbild5721x3455.jpg",
        description: "Cà phê hòa tan hương vị đậm đà, thơm ngon, đặc biệt phù hợp với người thích hương vị đắng."
    },
    {
        id: 5,
        name: "Cà Phê G7 3 in 1",
        price: 115000,
        image: "../../assets/images/products/elsalvadormenendezproduktbildh-dc68826c-6cf9-4fe6-86f2-15033128576b.jpg",
        description: "Cà phê hòa tan hương vị đậm đà, thơm ngon, đặc biệt phù hợp với người thích hương vị đắng."
    },
    {
        id: 6,
        name: "Cafe chồn",
        price: 999000,
        image: "../../assets/images/products/esperanzaproduktbild5700x34553-48d8cf11-46d5-4ee2-978d-cb640f1f7364.jpg",
        description: "Cà phê hòa tan hương vị đậm đà, thơm ngon, đặc biệt phù hợp với người thích hương vị đắng."
    },
    {
        id: 7,
        name: "Cafe Latte",
        price: 100000,
        image: "../../assets/images/products/ethiopiagujiproduktbildhemsida-91aadddb-8d8d-4139-a367-a8dbc3b65ebe.jpg",
        description: "Cà phê hòa tan hương vị đậm đà, thơm ngon, đặc biệt phù hợp với người thích hương vị đắng."
    },
    {
        id: 8,
        name: "Cafe Espresso",
        price: 99000,
        image: "../../assets/images/products/ethiopiagujiproduktbildhemsida-91aadddb-8d8d-4139-a367-a8dbc3b65ebe.jpg",
        description: "Cà phê hòa tan hương vị đậm đà, thơm ngon, đặc biệt phù hợp với người thích hương vị đắng."
    },
    {
        id: 9,
        name: "Cafe truyền thống",
        price: 990000,
        image: "../../assets/images/products/ethiopiagujiproduktbildhemsida-91aadddb-8d8d-4139-a367-a8dbc3b65ebe.jpg",
        description: "Cà phê hòa tan hương vị đậm đà, thơm ngon, đặc biệt phù hợp với người thích hương vị đắng."
    }
];
// end data products

// render product search
const renderProductSearch = async (content) => {
    try {
        // Lọc dữ liệu theo nội dung tìm kiếm
        const dataSearch = products.filter(item => item.name.toLowerCase().includes(content.toLowerCase()));

        // Lấy phần tử .inner-search-result
        const innerSearchResult = document.querySelector(".inner-search-result");
        if (innerSearchResult) {
            // Tạo nội dung template cho kết quả tìm kiếm
            const innerSearchResultTemplate = `
            <h3 class="inner-title">
                Kết quả tìm kiếm: 
            </h3>
            <div class="inner-list-result">
                ${dataSearch.splice(0,2).map(item => `
                <div class= "inner-item">
                    <div class="inner-image">
                        <a href="../productDetail/?id=${item.id}">
                            <img src=${item.image} alt='${item.name}' />
                        </a>
                    </div>
                    
                    <div class="inner-text">
                        <h3 class="inner-name">
                            <a href="../productDetail/?id=${item.id}">${item.name}</a>
                        </h3>
                        <p class="inner-price">
                            ${item.price.toLocaleString()}đ
                        </p>
                    </div>
                </div>
                `).join('')}
            </div>
            <a href="../search/?content=${content}" class="inner-extra">
                Xem tất cả kết quả tìm kiếm
            </a>
            `;

            // Hiển thị kết quả tìm kiếm
            innerSearchResult.innerHTML = innerSearchResultTemplate;
            innerSearchResult.style.display = "block";
        }
    } catch (error) {
        console.error("Failed to fetch product data:", error);
    }
};
// end render product search

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
    let isLogin = localStorage.getItem("isLogin");
    console.log("isLogin: ", isLogin);

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
                        <div class="inner-search-result"></div>
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
                                    <a href="../productDetail/?id=1">
                                        <img src="../../assets/images/products/colombiadecafproduktbildhemsid.jpg" alt='' />
                                    </a>
                                </div>
                                <div class="inner-text">
                                    <h3 class="inner-name">
                                        <a href="../productDetail/?id=1">Cafe Legend</a>
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
                        ${isLogin === "true" ? 
                        `
                            <a href="../account/">Tài khoản</a>
                            <a href="../home/" class="inner-logout">Đăng xuất</a>
                        ` : 
                        `
                            <a href="../login/">Đăng nhập</a>
                            <a href="../register/">Đăng ký</a>
                        `}
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

        // logout
        const innerLogout = document.querySelector(".inner-logout");
        if (innerLogout) {
            innerLogout.addEventListener("click", () => {
                localStorage.setItem("isLogin", "false");
                window.location.href = "../login/";
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
        const innerFormSearch = document.querySelector(".inner-form-search");
            if (innerFormSearch) {
                const innerSearchButton = document.querySelector(".inner-search-button");

                innerSearchButton.addEventListener("click", (e) => {
                    e.preventDefault();
                    const content = innerFormSearch.querySelector("input[name='content']");
                    window.location.href = `../search/?content=${content.value}`;
                });

                // Xử lý sự kiện nhấn Enter
                const contentInput = innerFormSearch.querySelector("input[name='content']");
                contentInput.addEventListener("keypress", (e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        window.location.href = `../search/?content=${contentInput.value}`;
                    }
                });

                innerFormSearch.addEventListener("input", (e) => {
                    e.preventDefault();
                    const content = innerFormSearch.querySelector("input[name='content']");
                    renderProductSearch(content.value);
                });
            }
        // end search

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

        const innerUser = document.querySelector(".inner-user");
        const innerDropdownUser = document.querySelector(".inner-dropdown-user");
        innerUser.addEventListener("click", (event) => {
            innerDropdownUser.style.display = "block";
            event.stopPropagation();
        });

        document.addEventListener("click", (event) => {
            if (!innerDropdownUser.contains(event.target) && !innerUser.contains(event.target)) {
                innerDropdownUser.style.display = "none";
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
                    <a href="../about/">
                        Giới thiệu
                    </a>
                </li>
                <li>
                    <a href="../store/">
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