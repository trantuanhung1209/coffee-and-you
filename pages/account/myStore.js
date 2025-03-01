const section1 = () => {
    const section1Element = document.querySelector('.section-1');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const section1Template = `
    <div class="container">
        <div class="center">
            <div class="left">
                <h3>TRANG TÀI KHOẢN</h3>
                <p style=" font-weight: bold;">Xin chào,
                    <span style="color: var(--color-primary);">${currentUser.fullName}</span>!
                </p>
                <ul>
                    <li><a href="index.html">Thông tin tài khoản</a></li>
                    <li><a href="myStore.html" style="color: var(--color-primary);">Đơn hàng của bạn</a></li>
                    <li><a href="changePassword.html">Đổi mật khẩu</a></li>
                </ul>
            </div>
            <div class="right">
                <h3>ĐƠN HÀNG CỦA BẠN</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Đơn hàng</th>
                            <th>Ngày</th>
                            <th>Địa chỉ</th>
                            <th>Giá trị đơn hàng</th>
                            <th>TT thanh toán</th>
                            <th>TT vận chuyển</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="6">
                                <p style="margin-left: 8px;">Không có đơn hàng nào.</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    `;
    if (section1Element) {
        section1Element.innerHTML = section1Template;
    }
}
section1();