export const scrollButtom = () => {
    const $scrollBtn = document.getElementById("scroll-top-btn");

    document.addEventListener("scroll", (e) => {
        if (window.scrollY > 150) {
            $scrollBtn.classList.remove("hidden");
        } else {
            $scrollBtn.classList.add("hidden");
        }
    });

    document.addEventListener("click", (e) => {
        if (e.target.matches("#scroll-top-btn")){
            window.scrollTo({
                top: 0, // Lleva el scroll al tope superior
            });
        }
    });
};
