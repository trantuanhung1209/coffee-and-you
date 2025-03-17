// // observer content pour 
document.addEventListener("DOMContentLoaded", function () {
    const section5 = document.querySelector(".section-5");
    let innerPour = document.querySelector(".inner-pour");

    let observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    innerPour.classList.add("show");
                }
            });
        },
        { threshold: 0.5 } // Kích hoạt khi 50% phần tử xuất hiện
    );

    observer.observe(section5);
});
// // end observer content pour

//section 6
//data products
const productsStore = [
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
        image: "../../assets/images/products/ethiopiagujiproduktbildhemsida-91aadddb-8d8d-4139-a367-a8dbc3b65ebe.webp",
        description: "Cà phê hòa tan hương vị đậm đà, thơm ngon, đặc biệt phù hợp với người thích hương vị đắng."
    },
    {
        id: 8,
        name: "Cafe Espresso",
        price: 99000,
        image: "../../assets/images/products/fikaproduktbild5721x3455326x54.webp",
        description: "Cà phê hòa tan hương vị đậm đà, thơm ngon, đặc biệt phù hợp với người thích hương vị đắng."
    },
    {
        id: 9,
        name: "Cafe truyền thống",
        price: 990000,
        image: "../../assets/images/products/ftoproduktbild5721x3455326x540.webp",
        description: "Cà phê hòa tan hương vị đậm đà, thơm ngon, đặc biệt phù hợp với người thích hương vị đắng."
    },
    {
        id: 10,
        name: "Capuchino",
        price: 990000,
        image: "../../assets/images/products/brazilfortalezaproduktbildhems.jpg",
        description: "Cà phê hòa tan hương vị đậm đà, thơm ngon, đặc biệt phù hợp với người thích hương vị đắng."
    },
    {
        id: 11,
        name: "Cà phê SÁNG TẠO 9",
        price: 990000,
        image: "../../assets/images/products/ethiopiawelenaproduktbildhemsi.webp",
        description: "Cà phê hòa tan hương vị đậm đà, thơm ngon, đặc biệt phù hợp với người thích hương vị đắng."
    },
    {
        id: 12,
        name: "Cà phê Chế Phin Loại 2",
        price: 990000,
        image: "../../assets/images/products/caravanproduktbild5721x3455326-c84e5abb-aa0f-4f47-8bfc-ee3e74689f70.jpg",
        description: "Cà phê hòa tan hương vị đậm đà, thơm ngon, đặc biệt phù hợp với người thích hương vị đắng."
    },
];
// end data products

const section6 = () => {
    const section6Element = document.querySelector(".section-6");
    const section6Template = `
    <div class="container">
        <div class="inner-top">
            <div class="inner-image">
                <img src="../../assets/images/svg/coffees.svg" alt="">
            </div>
            <div class="inner-title">
                <h1>
                    <span>
                        Cửa hàng
                    </span>
                </h1>
                <h2>Cafe</h2>
            </div>
        </div>

        <div class="inner-list-product">
            <div class="inner-wrap">
                ${productsStore.splice(0,8).map(product => `
                <div class="inner-item">
                    <div class="inner-image">
                        <img src="${product.image}" alt='${product.name}'>
                        <div class="inner-button-contact">
                            <a href="#">${product.price.toLocaleString()}₫</a>
                        </div>
                    </div>

                    <div class="inner-content">
                        <h2>
                            <a href="../productDetail/?id=${product.id}">
                                ${product.name}
                            </a>
                        </h2>
                        <p class="inner-desc">
                            1 gói 250 gram
                        </p>
                    </div>

                    <div class="inner-button">
                        <button class="button-buy">
                            Mua ngay
                        </button>
                        <button class="button-detail">
                            <a href="../productDetail/?id=${product.id}">
                                Chi tiết
                            </a>
                        </button>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>

        <div class="inner-bottom">
            <a href="../store/" class="button-view-more">
                Xem thêm
            </a>
        </div>
    </div>
    `;
    if (section6Element) {
        section6Element.innerHTML = section6Template;
    }

    document.addEventListener("DOMContentLoaded", function () {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.1 } // Kích hoạt khi 20% phần tử xuất hiện trong viewport
        );
    
        observer.observe(section6Element);
    });
    
}
section6();
//end section 6

// section 7
const validatePhoneNumber2 = (phoneNumber) => {
    const re = /^[0-9]{10}$/;
    return re.test(phoneNumber);
}

const formatDate2 = (date) => {
    const dateObject = new Date(date);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    return `${day}/${month}/${year}`;
};

const section7 = () => {
    const section7Element = document.querySelector(".section-7");
    const section7Template = `
    <div class="container">
        <div class="inner-top">
            <div class="inner-image">
                <img src="../../assets/images/svg/coffees.svg" alt="">
            </div>
            <div class="inner-title">
                <h1>
                    <span>
                        Đặt bàn
                    </span>
                </h1>
                <h2>Trực tuyến</h2>
            </div>
        </div>

        <div class="inner-content">
            <div class="row">
                <div class="col-6">
                    <img src="../../assets/images/background/book-table-img.jpg" alt="">
                </div>
                <div class="col-6">
                    <h2 class="inner-title">
                        Điền thông tin
                        đặt bàn
                    </h2>
                    <form class="inner-form">
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

                        <button class="inner-button">
                            Đặt bàn
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;

    if (section7Element) {
        section7Element.innerHTML = section7Template;

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
                    alert("Vui lòng nhập ngày đặt");
                    return;
                }
                const today = new Date().toISOString().split("T")[0]; // Định dạng YYYY-MM-DD
                if (new Date(date) < new Date(today)) {
                    alert('Ngày bạn chọn đã qua rồi hoặc không hợp lệ');
                    return;
                }
                if (!time) {
                    alert("Vui lòng nhập thời gian");
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

                if (number && date && fullName && phone && note) {
                    innerForm.reset();
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
}
section7();
// // end section 7