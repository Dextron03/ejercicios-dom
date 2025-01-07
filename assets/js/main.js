import {abrirCerrarMenu} from "./components/menu-amburguesa.js"
import {imprimirEnDom, alarma} from "./components/reloj-digital.js"
import {precionarTecla, moveBall} from "./components/teclado.js"
import {countdown} from "./components/cuenta-regresiva.js"
import {scrollButtom} from "./components/boton-scroll.js"
import { activarDarkMode } from "./components/dark-mode.js"

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
countdown("2025-07-03T00:00:00", "A TERMINADO LA CUENTA REGRESIVA");
scrollButtom();
activarDarkMode()

