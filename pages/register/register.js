const mainElement = document.querySelector('.inner-main');

function validateEmail2(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

const register = () => {
    const section1 = mainElement.querySelector('.section-1');
    if (section1) {
        const form = section1.querySelector('.inner-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const fullName = form.fullName.value.trim();
            const email = form.email.value.trim();
            const phoneNumber = form.phoneNumber.value.trim();
            const password = form.password.value.trim();

            if (!validateEmail2(email)) {
                alert('Email không hợp lệ');
                return;
            }

            // Lấy danh sách người dùng từ localStorage
            let users = JSON.parse(localStorage.getItem('users')) || [];

            // Kiểm tra email đã tồn tại chưa
            const userExists = users.some(user => user.email === email);
            if (userExists) {
                alert('Email đã tồn tại');
                return;
            }

            // Thêm người dùng mới
            const newUser = {
                fullName,
                email,
                phoneNumber,
                password
            };
            
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            alert('Đăng ký thành công');
            localStorage.setItem('isLogin', 'true');
            localStorage.setItem('currentUser', JSON.stringify(newUser));

            window.location.href = '../home/';
        });

    }
}
register();