// observer content pour 
document.addEventListener("DOMContentLoaded", function () {
    const section5 = document.querySelector(".section-5");
    let innerPour = document.querySelector(".inner-pour");
    let innerImage = document.querySelector(".inner-image");

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
// end observer content pour
