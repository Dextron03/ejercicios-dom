const isOnline = () => {
    const $div = document.createElement("div");

    if (navigator.onLine) {
      $div.textContent = "Conexión Establecida";
      $div.classList.add("online");
    } else {
      $div.textContent = "Conexión Perdida";
      $div.classList.add("offline");
    }

    document.body.appendChild($div);

    $div.addEventListener("animationend", () => {
      $div.remove();
    });
  };

export const networkStatus = () => {  
    // Escuchar cambios de conexión
    window.addEventListener("online", isOnline);
    window.addEventListener("offline", isOnline);
  };
  