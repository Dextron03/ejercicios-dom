const actualizarHora = () => {
    let horaActual = new Date();
    let hora = horaActual.getHours();
    let minuto = horaActual.getMinutes();
    let segundos = horaActual.getSeconds().toString();

    const agregarDigito = (num) => String(num).padStart(2, "0");// Asegura que cada número tenga al menos 2 dígitos
    
    return `${agregarDigito(hora)}:${agregarDigito(minuto)}:${agregarDigito(segundos)}`
};

export const imprimirEnDom = () => {
    const $reloj = document.getElementById("reloj");
    let temporizador = setInterval(()=>{},0);


    document.addEventListener("click", e =>{
        if(e.target.matches("#activar-reloj")){
            temporizador = setInterval(()=>{
                $reloj.innerHTML = `<p>${actualizarHora()}</p>`
            }, 1500);
        }
        
        if(e.target.matches("#desactivar-reloj")){
            clearInterval(temporizador);
            $reloj.innerHTML = "";
        }
    });  
}

export const alarma = () => {
    const audio = new Audio("/assets/media/audio/alarma.mp3");

    document.addEventListener("click", e => {
        if(e.target.matches("#activar-alarma")){
            audio.play()
            .then(()=>{
                console.log("Audio reproduciendose");
            })
            .catch(error => {
                console.error("Error al reproducir audio: ", error)
            });
            audio.loop = true;
        }

        if(e.target.matches("#desactivar-alarma")){
            audio.pause();
            audio.load();
        }
    });
}