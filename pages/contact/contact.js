const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};
const section1 = () => {
    const innerFormContact = document.querySelector('.inner-form-contact');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const isLogin = JSON.parse(localStorage.getItem('isLogin'));
    if (innerFormContact) {
        innerFormContact.addEventListener('submit', (e) => {
            e.preventDefault();
            const fullName = innerFormContact.fullName.value;
            const email = innerFormContact.email.value;
            const message = innerFormContact.message.value;

            if (!email || !validateEmail(email)) {
                alert('Vui lòng nhập email hợp lệ');
                return;
            }

            if (!fullName || !message || !email) {
                alert('Vui lòng nhập đầy đủ thông tin');
                return;
            }

            if (fullName && email && message) {
                innerFormContact.reset();
                // Hiển thị popup xác nhận
                const sectionPopup = document.querySelector('.section-popup');
                if (sectionPopup) {
                    sectionPopup.style.display = 'flex';
                    sectionPopup.style.opacity = '1';
                    sectionPopup.style.pointerEvents = 'auto';

                    const popupBody = sectionPopup.querySelector('.inner-popup-body');
                    const popupContentTemplate = `
                        <p>
                            Cảm ơn bạn đã liên hệ với <b>MR.COFFEE</b>. Chúng tôi sẽ phản hồi lại bạn trong thời gian sớm
                            nhất.
                        </p>
                        <div class="inner-info">
                            <p>
                                <b>Họ và tên:</b> &nbsp; <span>${fullName}</span>
                            </p>
                            <br/>
                            <p>
                                <b>Email:</b> &nbsp; <span>
                                    ${email}
                                </span>
                            </p>
                            <br/>
                            <p>
                                <b>Message:</b> &nbsp; <span>
                                    ${message}
                                </span>
                            </p>
                        </div>
                        <div class="inner-action">
                            <button class="inner-button">
                            Xác nhận
                            </button>
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
            }
        });
    }
}
section1();