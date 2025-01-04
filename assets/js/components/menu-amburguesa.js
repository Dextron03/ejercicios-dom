export const abrirCerrarMenu = () => {
    const $panel = document.querySelector(".panel"),
    $hamburgerBtn = document.querySelector(".hamburger");

    document.addEventListener("click", (e) => {
        if(e.target.matches(".panel-btn") || e.target.matches(".hamburger-box") || e.target.matches(".hamburger-inner")){
            $panel.classList.toggle("is-active");
        }

        if(e.target.matches(".panel a")){
            $panel.classList.remove("is-active");
            $hamburgerBtn.classList.remove("is-active");
        }
    });
}

