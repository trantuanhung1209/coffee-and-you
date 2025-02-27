const mainElement = document.querySelector('.inner-main');

const login = () => {
    const section1 = mainElement.querySelector('.section-1');

    if (section1) {
        const formElement = section1.querySelector('.inner-form');
        formElement.addEventListener('submit', (event) => {
            event.preventDefault();

            const email = formElement.email.value;
            const password = formElement.password.value;

            if (!email || !password) {
                alert('Vui lòng nhập đầy đủ thông tin');
                return;
            }

            const userData = JSON.parse(localStorage.getItem('users'));
            if (userData) {
                const user = userData.find(user => email === user.email && password === user.password);
                if (user) {
                    alert('Đăng nhập thành công');
                    localStorage.setItem("isLogin", true);
                    window.location.href = `../account/`;
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('isLogin', true);
                } else {
                    alert('Email hoặc mật khẩu không chính xác');
                }
            } else {
                alert('Tài khoản không tồn tại');
            }
        });
    }
}
login();