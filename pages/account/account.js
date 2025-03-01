const innerMainElement = document.querySelector('.inner-main');

const section1 = () => {
    const section1Element = innerMainElement.querySelector('.section-1');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const section1Template = `
    <div class="container">
        <div class="center">
            <div class="left">
                <h3>TRANG TÀI KHOẢN</h3>
                <p style="font-weight: bold;">Xin chào,
                    <span style="color: var(--color-primary)">${currentUser.fullName}!</span>
                </p>
                <ul>
                    <li><a href="index.html" style="color: var(--color-primary);">Thông tin tài khoản</a></li>
                    <li><a href="myStore.html">Đơn hàng của bạn</a></li>
                    <li><a href="changePassword.html">Đổi mật khẩu</a></li>
                </ul>
            </div>
            <div class="right">
                <h3>THÔNG TIN TÀI KHOẢN</h3>
                <p style="margin-top: 50px;"><span style="font-weight: bold;">Họ tên:</span> Lê Khang</p>
                <p><span style="font-weight: bold;">Email:</span> khanglehoang2602@gmail.com</p>
                <p><span style="font-weight: bold;">Số điện thoại:</span> khanglehoang2602@gmail.com</p>
            </div>
        </div>
    </div>
    `;

    if (section1Element) {
        section1Element.innerHTML = section1Template;

        if (currentUser) {
            const { fullName, email, phoneNumber } = currentUser;
            const rightElement = section1Element.querySelector('.right');
            rightElement.innerHTML = `
            <h3>THÔNG TIN TÀI KHOẢN</h3>
            <p style="margin-top: 50px;"><span style="font-weight: bold;">Họ tên:</span> ${fullName}</p>
            <p><span style="font-weight: bold;">Email:</span> ${email}</p>
            <p><span style="font-weight: bold;">Số điện thoại:</span> ${phoneNumber}</p>
            `;
        }
    }
}
section1();