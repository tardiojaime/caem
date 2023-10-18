const contenedor = document.getElementById("detalles");
var region = document.getElementById("region");
var region2 = document.getElementById("region2");
var elemento = document.getElementById("detalles");
var heigth = window.innerWidth;
var media = 992;
var bottom_sticky = document.getElementById("sticky_bottom");
//media>heigth ?
console.log("El ancho de la pantalla es: " + heigth + " píxeles");
var departamento = document.getElementById("departamento");
var departamento2 = document.getElementById("departamento2");
// Obtén la posición del elemento
var btn_enlace = document.getElementById("btn_ocultar");
region.addEventListener("change", function (e) {
  this.value != "Bolivia"
    ? departamento.classList.add("d-none")
    : departamento.classList.remove("d-none");
  console.log("seleccionado " + this.value);
});
region2.addEventListener("change", function (e) {
  this.value != "Bolivia"
    ? departamento2.classList.add("d-none")
    : departamento2.classList.remove("d-none");
  console.log("seleccionado " + this.value);
});
window.addEventListener("scroll", function () {
  const posicion = elemento.getBoundingClientRect();
  heigth = window.innerWidth;
  if (posicion.top == 0) {
    btn_enlace.classList.remove("d-none");
  } else {
    btn_enlace.classList.add("d-none");
    // Comprueba si el elemento está en la parte superior de la ventana de visualización
  }
  if (heigth < media && posicion.top < 0) {
    bottom_sticky.style.display = "block";
  } else {
    bottom_sticky.style.display = "none";
  }
});
