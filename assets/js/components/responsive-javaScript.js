export const responsiveMedia = (id, mq, mobileContent, desktopContent) => {
    const $breakpoint = window.matchMedia(mq);

    const responsive = (e) => {
        const element = document.getElementById(id);
        if (!element) return; // Asegura que el elemento existe antes de modificarlo.

        if (e.matches) {
            element.innerHTML = desktopContent;
        } else {
            element.innerHTML = mobileContent;
        }
    };

    // Escucha los cambios de estado del media query
    $breakpoint.addEventListener("change", responsive);

    // Ejecuta la función inicialmente para aplicar el contenido adecuado
    responsive($breakpoint);
};
