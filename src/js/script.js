const contenedor = document.getElementById("detalles");

// Obtén el elemento
var elemento = document.getElementById("detalles");

// Obtén la posición del elemento
var btn_enlace = document.getElementById("btn_ocultar");

window.addEventListener("scroll", function () {
  var posicion = elemento.getBoundingClientRect();
  if (posicion.top === 0) {
    btn_enlace.classList.remove("d-none");
  } else {
    console.log("El elemento no ción." + posicion.top);
    btn_enlace.classList.add("d-none");
    // Comprueba si el elemento está en la parte superior de la ventana de visualización
  }
});
