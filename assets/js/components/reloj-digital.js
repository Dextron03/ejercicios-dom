export const imprimirEnDom = () => {
    const $reloj = document.getElementById("reloj");
    let temporizador = setInterval(()=>{},0);

    document.addEventListener("click", e =>{
        if(e.target.matches("#activar-reloj")){
            temporizador = setInterval(()=>{
                let reloj = new Date().toLocaleTimeString()
                $reloj.innerHTML = `<p>${reloj}</p>`
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