import {abrirCerrarMenu} from "./components/menu-amburguesa.js"
import {imprimirEnDom, alarma} from "./components/reloj-digital.js"
import {precionarTecla, moveBall} from "./components/teclado.js"
import {countdown} from "./components/cuenta-regresiva.js"
import {scrollButtom} from "./components/boton-scroll.js"
import { activarDarkMode } from "./components/dark-mode.js"
import { responsiveMedia } from "./components/responsive-javaScript.js"
import { responsiveTester } from "./components/responsive-tester.js"
import { deteccionDeDispositivo } from "./components/user_agent.js"
import { networkStatus } from "./components/deteccion-red.js"
import { detectedCam } from "./components/deteccion-camara.js"
import { getGeolocation } from "./components/deteccion-geolocalizacion.js"
import { searchFilters } from "./components/filtros-busqueda.js"
import { draw } from "./components/sorteo.js"
import { slider } from "./components/slider-responsive.js"
import { scrollSpy } from "./components/scroll_espia.js"
import { videoInteligencia } from "./components/video-inteligente.js"

const $hamburgerBtn = document.querySelector(".hamburger");

document.addEventListener("click", (e) => {
  if(e.target.matches(".panel-btn") || e.target.matches(".hamburger-box") || e.target.matches(".hamburger-inner")){
    $hamburgerBtn.classList.toggle("is-active"); 
  }
});

abrirCerrarMenu();
imprimirEnDom();
alarma();
precionarTecla();
moveBall();
countdown("2025-01-08T09:00:00", "A TERMINADO LA CUENTA REGRESIVA");
scrollButtom();
activarDarkMode()
responsiveTester();
deteccionDeDispositivo();
networkStatus();
searchFilters();



document.addEventListener("DOMContentLoaded", (e) => {
  responsiveMedia(
      "youtube",
      "(min-width: 1024px)",
      `<a href="https://youtu.be/6IwUl-4pAzc?si=bzlN8hLSQiSt6GeD" target="_blank">Ver video</a>`,
      `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc?si=tem9HrPnoas2aM07" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  );
  
  responsiveMedia(
      "gmaps",
      "(min-width: 1024px)",
      `<a href="https://maps.app.goo.gl/YaAGamEZSvF6VTJ69" target="_blank">Ver mapa</a>`,
      `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5221.947990035913!2d-69.7617226368338!3d18.475431308669556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1ses-419!2sdo!4v1736378812392!5m2!1ses-419!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );

  detectedCam();
  getGeolocation();
  draw();
  slider();
  scrollSpy();
  videoInteligencia();
});

