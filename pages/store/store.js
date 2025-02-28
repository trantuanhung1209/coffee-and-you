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

//render products
const renderProducts = (products) => {
    const listProductElement = document.getElementById("list-product");
    const listProductTemplate= `
        ${products.map((product) => `
        <div class="cha">
            <img src="${product.image}" alt=''>
            <div class="con2">
                <div class="chitiet">
                    <div class="gia">
                        <p>${product.price.toLocaleString()}₫</p>
                    </div>
                    <div class="tieude">
                        <h3>
                            <a href="../productDetail/?id=${product.id}">
                                ${product.name}
                            </a>
                        </h3>
                        <p style="color: #dc8068;">1 gói 250 gram</p>
                    </div>
                </div>
                <div class="inner-button">
                    <button class="btnmuangay">Mua ngay</button>
                    <a href="../productDetail/?id=${product.id}" class="btnchitiet">Chi tiết</a>
                </div>
            </div>
        </div>
        `).join("")}
    `
    if (listProductElement) {
        listProductElement.innerHTML = listProductTemplate;
    }
}
renderProducts(productsStore);
//end render products

// sorter
const filterProducts = (products, value) => {
    switch (value) {
        case "price-asc":
            return products.sort((a, b) => a.price - b.price);
        case "price-desc":
            return products.sort((a, b) => b.price - a.price);
        case "alphabet-asc": 
            return products.sort((a, b) => a.name.localeCompare(b.name));
        case "alphabet-desc":
            return products.sort((a, b) => b.name.localeCompare(a.name));
        case "default":
            return products;
        default:
            return products;
    }
}
const sorter = () => {
    const selectElement = document.getElementById("options");
    if (selectElement) {
        selectElement.addEventListener("change", (event) => {
            const value = event.target.value;
            const sortedProducts = filterProducts(productsStore, value);
            const listProductElement = document.getElementById("list-product");
            listProductElement.innerHTML = "Đang tải dữ liệu...";
            setTimeout(() => {
                renderProducts(sortedProducts);
            }, 500);
        });
    }

}
sorter();