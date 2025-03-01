//data articles 
const articles = [
    {
        id: 1,
        title: 'Văn hóa uống cà phê của người Sài Gòn lên báo Anh',
        content: 'Bài viết trên tờ Telegraph (Anh) nhận định văn hóa thưởng thức cà phê ở TPHCM không giống như ở bất cứ nơi nào khác trên thế giới. Ở đây, cà phê là thức uống đem lại năng lượng cho người dân của cả một thành phố sôi động. Điều đầu tiên một du khách cần phải học khi đặt chân tới TPHCM, đó là biết cách qua đường. Đó là một thử thách hóc búa đòi hỏi cả sự liều lĩnh lẫn khả năng tính toán chính xác những chuyển động ngang dọc, nhanh chậm…',
        image: '../../assets/images/articles/mrcoffee.webp',
        date: '01/03/2025',
    },
    {
        id: 2,
        title: 'Người Thụy Điển thành công hơn nhờ… uống cà phê?',
        content: 'Thụy Điển là quốc gia duy nhất ở Bắc Âu có hẳn một phong cách thưởng thức cà phê cho riêng mình. Có tên là Fika, đây là một phong tục mà mọi người thường tụ tập để ăn uống và nói chuyện. Fika cũng thường được dùng để chào đón khách quý, người nước ngoài đến thăm thú du lịch Thụy Điển. Và hiện nay tập quán này đã lan ra trên khắp thế giới. Nếu như dịch theo nghĩa thô sơ nhất theo tiếng Thụy Điển thì Fika có nghĩa là việc uống cà phê, nhai nhóp nhép món ngọt và trò chuyện với nhau và hơn hết là một phần trong ngày làm việc ở Thụy Điển.',
        image: '../../assets/images/articles/cafe-theme-bizweb.webp',
        date: '02/03/2025',
    },
    {
        id: 3,
        title: 'Không chỉ giảm ung thư, cà phê có nhiều lợi cho sức khỏe hơn bạn tưởng',
        content: 'Uống cafe trước kia được cho là gây ra một số tác hại. Nhưng sự thật là bạn nên nghĩ lại về điều này. Gần đây thôi, đã từng có một nghiên cứu cho rằng uống cafe sẽ giúp chúng ta giảm được nguy cơ ung thư ruột và đặc biệt là ung thư đại trực tràng. Tuy vậy, đây là phương pháp còn gây e ngại cho nhiều người, việc uống quá nhiều cafe từ lâu đã được coi là không tốt cho sức khỏe, như làm tăng nhịp tim, tăng huyết áp, dễ gây đột quỵ…',
        image: '../../assets/images/articles/giao-dien-coffee.webp',
        date: '03/03/2025',
    },
    {
        id: 4,
        title: 'Cách phân biệt cà phê thật và cafe giả',
        content: 'Làm thế nào để biết cà phê bạn mua về thực sự là loại cà phê thật? Và làm sao để phân biết đâu là một sản phẩm cà phê nguyên chất, cà phê thật tốt cho sức khỏe? Cà phê là một loại hạt rất đặc biệt, và khác biệt, có thể dễ dàng phân biệt cà phê nguyên chất và cà phê giả, bột cà phê thật với bột của các loại hạt ngũ cốc khác. Để bảo đảm cho sức khỏe và khẩu vị thưởng thức cà phê đích thực của chính bạn, bạn cần ghi nhớ vài chi tiết căn bản về thuộc tính của hạt cà phê rang rất khác với các loại hạt rang khác và bột của chúng:',
        image: '../../assets/images/articles/theme-coffee.webp',
        date: '04/03/2025',
    },
    {
        id: 5,
        title: 'Say đứ đừ với 5 quán cafe “Sống ảo tung chảo”',
        content: 'Cùng bắt đầu tour sống ảo với một album ảnh deep khỏi chê theo phong cách quý tộc sang trọng nhé. Mấy hôm nay Nội Phủ Cafe đang được dân tình Phan Thiết "rần rần" săn lùng vì những góc chụp theo kiểu nội cung bí hiểm đầy mới lạ. Bỏ túi ngay địa chỉ quán để cuối tuần qua check in nghen bà con !Bước vào quán là đúng kiểu “chất lừ” từ cái nhìn đầu tiên luôn nhé. Quán theo mô hình cafe container kết hợp vô cùng sáng tạo. Kết cấu khối của container tạo nên những khối màu riêng biệt với cách decor phá cách đến từng chi tiết tạo nên sự một không gian tổng thể độc đáo, màu sắc lên hình cực chuẩn. Sống ảo ở đây thì đảm bảo “dư chất” rồi bà con nhỉ?Làm thế nào để biết cà phê bạn mua về thực sự là loại cà phê thật? Và làm sao để phân biết đâu là một sản phẩm cà phê nguyên chất, cà phê thật tốt cho sức khỏe? Cà phê là một loại hạt rất đặc biệt, và khác biệt, có thể dễ dàng phân biệt cà phê nguyên chất và cà phê giả, bột cà phê thật với bột của các loại hạt ngũ cốc khác. Để bảo đảm cho sức khỏe và khẩu vị thưởng thức cà phê đích thực của chính bạn, bạn cần ghi nhớ vài chi tiết căn bản về thuộc tính của hạt cà phê rang rất khác với các loại hạt rang khác và bột của chúng:',
        image: '../../assets/images/articles/theme-coffee.webp',
        date: '05/03/2025',
    },
];
//end data

const mainElement = document.querySelector('.inner-main');
const url = new URL(window.location.href);
const id = url.searchParams.get('id');
const idFinal = parseInt(id);

const article = articles.find(article => article.id === idFinal);

//breadcumb
const breadCumb = () => {
    const breadCumbElement = document.querySelector('.inner-breadcumb');
    const breadCumbTemplate = `
    <div class="container ">
        <ul class="breadcumb m-0 py-3 d-flex gap-2 list-unstyled">
            <li>
                <a href="../../index.html" style="color: var(--color-secondary);">Trang chủ</a>
            </li>
            <li>
                <i class="fas fa-angle-right" style="color: var(--color-secondary);"></i>
            </li>
            <li>
                <a href="../news/" style="color: var(--color-secondary);">Tin tức</a>
            </li>
            <li>
                <i class="fas fa-angle-right" style="color: var(--color-secondary);"></i>
            </li>
            <li>
                <a href="#" style="color: var(--color-button-hover);">${article.title}</a>
            </li>
        </ul>
    </div>
    `;
    if (breadCumbElement) {
        breadCumbElement.innerHTML = breadCumbTemplate;
    }
} 
breadCumb();
//end breadcumb

//section-1
const section1 = () => {
    const section1Element = document.querySelector('.section-1');
    const section1Template = `
    <div class="container">
        <div class="inner-top">
            <div class="inner-date">
                <i class="fa-solid fa-calendar-days"></i>
                <span>Ngày đăng: ${article.date}</span>
            </div>
            <div class="inner-title">
                <h1>
                    ${article.title}
                </h1>
            </div>
            <div class="inner-author">
                <div class="inner-image">
                    <img src="../../assets/images/avatar/avar.jpeg" alt='${article.title}'>
                </div>
                <div class="inner-name">
                    Admin: <span>Hune</span>
                </div>
            </div>
        </div>

        <div class="inner-middle">
            <div class="inner-image">
                <img src="${article.image}" alt='${article.title}'>
            </div>
        </div>

        <div class="inner-bottom">
            <div class="inner-content">
                <h2>
                    ${article.title}
                </h2>
                <p>
                    ${article.content}
                </p>
            </div>
        </div>
    </div>
    `;
    if (section1Element) {
        section1Element.innerHTML = section1Template;
        const title = document.querySelector('title');
        title.textContent = article.title;
    }
}
section1();
// end section-1

//section-2
const section2 = () => {
    const section2Element = document.querySelector('.section-2');
    const articlesFilter = articles.filter(article => article.id !== idFinal);
    const section2Template = `
    <div class="container">
        <h2 class="inner-title">
            Bài viết liên quan
        </h2>

        <div class="inner-list-article">
            ${articlesFilter.map(article => `
            <div class="inner-item">
                <div class="inner-image">
                    <a href="../article/?id=${article.id}">
                        <img src="${article.image}" alt='${article.title}'>
                    </a>
                </div>

                <h2 class="inner-title" title='${article.title}'>
                    <a href="../article/?id=${article.id}">
                        ${article.title}
                    </a>
                </h2>

                <div class="inner-date">
                    <i class="fa-solid fa-calendar-days"></i>
                    <span>Ngày đăng: ${article.date}</span>
                </div>
            </div>
            `).join('')}
        </div>
    </div>
    `;
    if (section2Element) {
        section2Element.innerHTML = section2Template;
    }
}
section2();
//end section-2