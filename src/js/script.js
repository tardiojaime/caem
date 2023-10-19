document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("detalles");
  var region = document.getElementById("region");
  var region2 = document.getElementById("region2");
  var elemento = document.getElementById("detalles");
  var heigth = window.innerWidth;
  var media = 992;
  var departamento = document.getElementById("departamento");
  var departamento2 = document.getElementById("departamento2");
  var btn_enlace = document.getElementById("btn_ocultar");
  var bottom_sticky = document.getElementById("sticky_bottom");
  bottom_sticky.classList.remove("d-none");
  region.addEventListener("change", function (e) {
    this.value != "Bolivia"
      ? departamento.classList.add("d-none")
      : departamento.classList.remove("d-none");
  });
  region2.addEventListener("change", function (e) {
    this.value != "Bolivia"
      ? departamento2.classList.add("d-none")
      : departamento2.classList.remove("d-none");
  });
  window.addEventListener("scroll", function () {
    const posicion = elemento.getBoundingClientRect();
    heigth = window.innerWidth;
    if (posicion.top == 0) {
      btn_enlace.classList.remove("d-none");
    } else {
      btn_enlace.classList.add("d-none");
    }
    if (heigth < media && posicion.top < 0) {
      bottom_sticky.style.display = "block";
    } else {
      bottom_sticky.style.display = "none";
    }
  });
});
