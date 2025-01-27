export const getGeolocation = () => {
    const $divGeolocation = document.getElementById("geolocation"),
    $ul = document.createElement("ul"),
    $enlace = document.createElement("a"),
    $fragmentoG = document.createDocumentFragment(),
    options = {
        enableHightAccuracy:true, // Con esta en true va tratar de hacer la mejor lectura posiblem
        tiemeout:5000,
        maximumAge:0 // No guarda las lecturas en cache
    }

    const sucess = position => {
        const myLocation = position.coords;
        
        for (const key in myLocation) {
            const element = myLocation[key],
            $li = document.createElement("li");

            if(key === "accuracy"){
                $li.innerHTML = `Precision: ${element}`
                $fragmentoG.appendChild($li);
            };
            if(key === "latitude"){
                $li.innerHTML = `Latitud: ${element}`;
                $fragmentoG.appendChild($li);
            }
            if(key === "longitude"){
                $li.innerHTML = `Longitud ${element}`;
                $fragmentoG.appendChild($li);
            }
        }
        $enlace.setAttribute("href", `https://www.google.com/maps/@${myLocation.latitude},${myLocation.longitude},${myLocation.accuracy}z?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D`)
        $enlace.target = "_blank"
        $enlace.innerHTML = "Verifique su ubicacion";
        $fragmentoG.appendChild($enlace)
        $ul.appendChild($fragmentoG)
        $divGeolocation.appendChild($ul)
        
    }
    const error = err => {
        $divGeolocation.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
        console.log(`Error ${err.code}: ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(sucess, error,options);
}