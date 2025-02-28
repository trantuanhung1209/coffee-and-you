const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idValue = urlParams.get('id');


//data products
const productDetails = [
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

// get product by id
const getProductById = (id) => {
    return productDetails.find(product => product.id == id);
}

const section1InnerLeft = () => {
    const innerLeft = document.querySelector('#inner-left');
    const product = getProductById(idValue);
    console.log(product);
    const innerLeftTemplate = `
    <div class="inner-top inner-left-top">
        <div class="inner-wrap row">
            <div class="inner-image col-5">
                <img src="${product.image}"
                    alt='${product.name}'>
            </div>
            <div class="inner-content col-7">
                <h2 class="inner-title" title="Salad rau mùa sốt mác mác">
                    ${product.name}
                </h2>
                <div class="inner-price">
                    <p class="inner-new-price">
                        ${product.price.toLocaleString()}₫
                    </p>


                </div>
                <div class="inner-action">
                    <div class="quantity-selector">
                        <label for="quantity">Số lượng:</label>
                        <div class="inner-button-input">
                            <button class="quantity-btn" id="decrease">-</button>
                            <input type="number" id="quantity" value="1" min="1">
                            <button class="quantity-btn" id="increase">+</button>
                        </div>
                    </div>

                    <div class="inner-button row gap-2">
                        <button class="inner-button-add col-5" id="2">
                            <i class="fas fa-cart-plus"></i>
                            Thêm vào giỏ hàng
                        </button>
                    </div>
                </div>

                <div class="inner-voucher">
                    <div class="inner-voucher-title">
                        <i class="fas fa-gift"></i>
                        <span>Ưu đãi</span>
                    </div>
                    <div class="inner-voucher-content">
                        <ul>
                            <li>
                                <i class="fas fa-check"></i>
                                <span>Giảm giá 10% cho hóa đơn từ 200.000₫</span>
                            </li>
                            <li>
                                <i class="fas fa-check"></i>
                                <span>Giảm giá 20% cho hóa đơn từ 500.000₫</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="inner-bottom inner-left-bottom">
        <ul>
            <li>
                <h3 class="inner-title">
                    Mô tả sản phẩm
                </h3>
            </li>
        </ul>
        <div class="inner-description">
            <p>
                Nguyên liệu để pha ${product.name} Để có một ly ${product.name} hoàn hảo, luôn bắt đầu
                bằng
                các hạt cà phê chất lượng cao nhất được rang hơi sẩm màu (rang đậm). Qua cách
                pha
                dưới áp suất, axít tự nhiên của hạt cà phê bị hòa tan nhanh hơn các phương pháp
                pha
                chế thông thường rất nhiều điều này sẽ làm cho ly cà phê có vị chua khó chịu. Để
                giảm bớt vị chua khó chịu này người ta sẽ rang hạt cà phê lâu hơn, do hàm lượng
                axít
                giảm đi khi rang hạt cà phê. Thường...
            </p>
            <h3>
                Nguyên liệu để pha ${product.name}
            </h3>
            <p>
                Để có một ly ${product.name} hoàn hảo, luôn bắt đầu bằng các hạt cà phê chất lượng cao
                nhất
                được rang hơi sẩm màu (rang đậm). Qua cách pha dưới áp suất, axít tự nhiên của
                hạt
                cà phê bị hòa tan nhanh hơn các phương pháp pha chế thông thường rất nhiều điều
                này
                sẽ làm cho ly cà phê có vị chua khó chịu. Để giảm bớt vị chua khó chịu này người
                ta
                sẽ rang hạt cà phê lâu hơn, do hàm lượng axít giảm đi khi rang hạt cà phê.
            </p>
            <p>
                Thường loại ${product.name} có chất lượng cao được dùng làm cà
                phê
                espresso. Để cà phê espresso có crema nhiều và đặc hơn người ta pha trộn hạt cà
                phê
                Arabia với Robusta (Coffea canephora), loại này không có được hương thơm và vị
                đậm
                đà như Arabica. Những người trong giới sành điệu vẫn cãi nhau sôi nổi là 100%
                Arabica hay phương thức pha trộn 60% Arabica và 40% Robusta sẽ mang lại một ly
                cà
                phê espresso hoàn hảo.
            </p>
            <h3>
                Cách pha ${product.name}
            </h3>
            <p>
                Để có một ly ${product.name} thơm ngon người ta cần đến loại máy pha chuyên
                dụng,
                tuy nhiên nếu do điều kiện bạn chưa có được sự trải nghiệm với chiếc máy pha thì
                có
                thể làm theo kiểu cổ điển bằng cách dùng một loại bình pha có tên “Moka Pot” hay
                “Moka Express” (xem hình)
            </p>
        </div>
    </div>
    `;
    if (innerLeft) {
        innerLeft.innerHTML = innerLeftTemplate;
    }
}
section1InnerLeft();

const section1InnerRight = () => {
    const innerRight = document.querySelector('#inner-right');
    const product = getProductById(idValue);
    const innerRightTemplate = `
    <div class="inner-top inner-right-top">
        <div class="inner-title">
            <h3>
                Có thể bạn đang tìm
            </h3>
        </div>
        <div class="inner-list">
            ${productDetails.splice(0,5).map(product => `
            <div class="inner-item">
                <div class="inner-image">
                    <a href="../productDetail/?id=${product.id}">
                        <img src="${product.image}"
                            alt='${product.name}'>
                    </a>
                </div>
                <div class="inner-content">
                    <h4 class="inner-name">
                        <a href="../productDetail/?id=${product.id}" title="${product.name}">
                            ${product.name}
                        </a>
                    </h4>
                    <p class="inner-price">
                        ${product.price.toLocaleString()}₫
                    </p>
                    <button class="inner-button" id="${product.id}">
                        Đặt món
                    </button>
                </div>
            </div>
            `).join('')}
        </div>
    </div>
    `;
    if (innerRight) {
        innerRight.innerHTML = innerRightTemplate;
    }
}
section1InnerRight();
