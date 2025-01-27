export const responsiveTester = () => {
    let ventana;
    const $form = document.getElementById("responsive-tester");

    document.addEventListener("submit", (e)=>{
        if(e.target === $form){
            e.preventDefault();
            ventana = window.open(
                $form.direccion.value,
                "tester",
                `width=${$form.ancho.value},height=${$form.alto.value}`)
        }
    });

    document.addEventListener("click", (e)=>{
        if(e.target === $form.cerrar){
            console.log(ventana)
            ventana.close();
        }
    });
};
  