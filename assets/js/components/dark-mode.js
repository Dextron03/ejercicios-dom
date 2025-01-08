const $dataList = document.querySelectorAll("[data-dark]"),
    $darkModeBtn = document.querySelector("#dark-theme-btn i");

const darkMode = () => {
    $darkModeBtn.classList.remove("bi-moon-stars-fill");
    $darkModeBtn.classList.add("bi-brightness-high-fill");
    $dataList.forEach((item) => {
        if (item.className.includes("stage")) {
            item.classList.add("stage-dark");
        } else {
            item.classList.add("dark-mode");
        }
    });
    localStorage.setItem("theme", "dark");
};

const lightMode = () => {
    $darkModeBtn.classList.add("bi-moon-stars-fill");
    $darkModeBtn.classList.remove("bi-brightness-high-fill");
    $dataList.forEach((item) => {
        if (item.className.includes("stage")) {
            item.classList.remove("stage-dark");
        } else {
            item.classList.remove("dark-mode");
        }
    });
    localStorage.setItem("theme", "light");
};

export const activarDarkMode = () => {
    document.addEventListener("click", (e) => {
        if (e.target.matches("#dark-theme-btn")) {
            if (localStorage.getItem("theme") === "light") {
                darkMode();
            } else {
                lightMode();
            }
        }
    });

    document.addEventListener("DOMContentLoaded", (e) => {
        if (localStorage.getItem("theme") === "dark") {
            darkMode();
        } else {
            lightMode();
        }
    });
};
