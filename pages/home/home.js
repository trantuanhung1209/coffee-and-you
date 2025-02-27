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
const section6 = () => {
    const section6Element = document.querySelector(".section-6");
    const buttonDetails = section6Element.querySelectorAll(".button-detail");
    if (buttonDetails.length > 0) {
        buttonDetails.forEach((buttonDetail) => {
            buttonDetail.addEventListener("click", (e) => {
                window.location.href = "../productDetail/";
            });
        });
    }
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