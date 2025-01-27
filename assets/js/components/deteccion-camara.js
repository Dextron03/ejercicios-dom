export const detectedCam = () => {
    const $video = document.getElementById("webcam"),
        $botonDetener = document.getElementById("detener-camara");

    let stream = null; // Variable para guardar el flujo de medios

    if (navigator.mediaDevices || navigator.mediaDevices.getUserMedia()) {
        console.log("Tu navegador soporta media devices");

        navigator.mediaDevices.getUserMedia({ video: true })
            .then((mediaStream) => {
                stream = mediaStream;
                $video.srcObject = mediaStream;
                $video.play();
            })
            .catch((error) => {
                console.log("Ha sucedido un error: ", error);
                const $errorMessage = document.createElement("h5");
                $errorMessage.textContent = `Ha ocurrido un error: ${error.message}`;
                $video.insertAdjacentElement("beforebegin", $errorMessage);
            });
    }

    $botonDetener.addEventListener("click", () => {
        if (stream) {
            // Detener todas las pistas del flujo de medios
            stream.getTracks().forEach((track) => track.stop());
            $video.srcObject = null;
            console.log("La captura de video se ha detenido.");
        } else {
            console.warn("No hay un flujo activo para detener.");
        }
    });
};
