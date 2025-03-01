


const section1 = () => {
    const section1Element = document.querySelector('.section-1');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const section1Template = `
    <div class="container">
        <div class="center">
            <div class="left">
                <h3>TRANG TÀI KHOẢN</h3>
                <p style="font-weight: bold;">Xin chào,
                    <span style="color: var(--color-primary);">${currentUser.fullName}</span>!
                </p>
                <ul>
                    <li><a href="index.html">Thông tin tài khoản</a></li>
                    <li><a href="myStore.html">Đơn hàng của bạn</a></li>
                    <li><a href="changePassword.html" style="color: var(--color-primary);">Đổi mật khẩu</a>
                    </li>
                </ul>
            </div>
            <div class="right">
                <h3>ĐỔI MẬT KHẨU</h3>
                <p>Để đảm bảo tính bảo mật vui lòng đặt mật khẩu với ít nhất 8 ký tự</p>
                <form class="form-changePass" id="form-changePass">
                    <fieldset>
                        <label for="old-password">
                            Mật khẩu cũ <span style="color: var(--color-primary);">*</span>
                        </label>
                        <input type="password" name="oldPassword" id="old-password"
                            placeholder="Mật khẩu cũ" width="100%" required>
                    </fieldset>
                    <fieldset>
                        <label for="new-password">
                            Mật khẩu mới <span style="color: var(--color-primary);">*</span>
                        </label>
                        <input type="password" name="newPassword" id="new-password"
                            placeholder="Mật khẩu mới" required>
                    </fieldset>
                    <fieldset>
                        <label for="confirm-password">
                            Xác nhận lại mật khẩu <span style="color: var(--color-primary);">*</span>
                        </label>
                        <input type="password" name="confirmPassword" id="confirm-password"
                            placeholder="Xác nhận lại mật khẩu" required>
                    </fieldset>

                    <button type="submit">
                        Đặt lại mật khẩu
                    </button>
                </form>
            </div>
        </div>
    </div>
    `;
    if (section1Element) {
        section1Element.innerHTML = section1Template;

        if (currentUser) {
            const formChangePass = document.querySelector('.form-changePass');
            if (formChangePass) {
                formChangePass.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const oldPass = formChangePass.oldPassword.value;
                    const newPass = formChangePass.newPassword.value;
                    const confirmPass = formChangePass.confirmPassword.value;
        
                    if (oldPass === currentUser.password) {
                        if (newPass === confirmPass) {
                            if (newPass !== oldPass) {
                                currentUser.password = newPass;
                                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                                alert('Đổi mật khẩu thành công!');
                                formChangePass.reset();
                                window.location.href = '../login/';
                            } else {
                                alert('Mật khẩu mới không được trùng với mật khẩu cũ!');
                            }
                        } else {
                            alert('Mật khẩu mới và xác nhận mật khẩu không trùng khớp!');
                        }
                    } else {
                        alert('Mật khẩu cũ không chính xác!');
                    }
                });
            }
        }
    }
}
section1();