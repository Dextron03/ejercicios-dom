export const precionarTecla = () => {
    document.addEventListener("keydown", (e) => {
        if (e.key === "a" && e.altKey) {
            alert("Has presionado la combinación Alt + A");
        }

        if (e.key === "p" && e.altKey) {
            let nombreDeUsuario = prompt("¿Cuál es tu nombre de usuario?");
        }

        if (e.key === "c" && e.altKey) {
            let confirmacion = confirm("¿Quieres continuar?");
        }
    });
};

export const moveBall = () => {
    const $ball = document.querySelector(".ball"),
        $stage = document.querySelector(".stage");
    let x = 0,
        y = 0;

    document.addEventListener("keydown", (e) => {
        const limitsBall = $ball.getBoundingClientRect();
        const limitsStage = $stage.getBoundingClientRect();

        switch (e.keyCode) {
            case 38:
                if (limitsBall.top > limitsStage.top) y--;
                e.preventDefault();
                break;

            case 40:
                if (limitsBall.bottom < limitsStage.bottom) y++;
                e.preventDefault();
                break;

            case 37:
                if (limitsBall.left > limitsStage.left) x--;
                e.preventDefault();
                break;

            case 39:
                if (limitsBall.right < limitsStage.right) x++;
                e.preventDefault();
                break;

            default:
                break;
        }

        $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    });
};
