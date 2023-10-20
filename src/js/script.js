document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("detalles");
  var region = document.getElementById("region");
  var region_m = document.getElementById("region_m");
  var elemento = document.getElementById("detalles");
  var height = window.innerWidth;
  var media = 992;
  var departamento = document.getElementById("departamento");
  var departamento_m = document.getElementById("departamento_m");
  var select_departamento = document.getElementById("select_departamento");
  var select_departamento_m = document.getElementById("select_departamento_m");
  var btn_enlace = document.getElementById("btn_ocultar");
  var bottom_sticky = document.getElementById("sticky_bottom");
  const radioButtons = document.querySelectorAll('input[name="tipo"]');

  radioButtons.forEach(function (boton) {
    boton.addEventListener("change", function () {
      let participantes = document.querySelector("#participantes");
      let participantes_m = document.querySelector("#participantes_m");
      let equipo = boton.value === "Equipo/Grupo";
      if (equipo) {
        console.log("si");
        participantes.querySelector("select").selectedIndex = 1;
        participantes_m.querySelector("select").selectedIndex = 1;
      } else {
        console.log("no");
        participantes.querySelector("select").selectedIndex = 0;
        participantes_m.querySelector("select").selectedIndex = 0;
      }
      participantes.classList.toggle("d-none", !equipo);
      participantes_m.classList.toggle("d-none", !equipo);
      /*       if (boton.checked) {
        boton.value === "Equipo/Grupo" ? participantes.classList.toggle
      } */
    });
  });
  region.addEventListener("change", function (e) {
    this.value != "Bolivia"
      ? departamento.classList.add("d-none")
      : (departamento.classList.remove("d-none"),
        (departamento.selectedIndex = 0));
  });
  region_m.addEventListener("change", function (e) {
    this.value != "Bolivia"
      ? departamento_m.classList.add("d-none")
      : (departamento_m.classList.remove("d-none"),
        (departamento_m.selectedIndex = 0));
  });
  window.addEventListener("scroll", function () {
    const posicion = elemento.getBoundingClientRect();
    height = window.innerWidth;
    const enlacevisible = posicion.top === 0;
    btn_enlace.classList.toggle("d-none", !enlacevisible);
    const sticky = height < media && posicion.top < 0;
    bottom_sticky.style.display = sticky ? "block" : "none";
  });

  var btn_submit = document.getElementById("btn_submit");
  var form = document.getElementById("registration-form");
  var espera = document.getElementById("espera");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    btn_submit.disabled = true;
    let estado =
      region.value === "Bolivia" &&
      select_departamento.value === "Seleccione...";
    if (estado) {
      select_departamento.focus();
      select_departamento.click();
      console.log(estado ? "si" : "no");
    } else {
      btn_submit.textContent = "Enviando";
      espera.classList.remove("d-none");
      const formData = new FormData(this);
      const url =
        "https://script.google.com/macros/s/AKfycbx0hIiQn0v1OfauGFb4jcbQHmI80dwd7mYtUncE-pSvpX7K7-RAYJWN_QCbfrhCC1bY/exec";
      fetch(url, { method: "POST", body: formData })
        .then((response) => {
          if (!response.ok) {
            throw new Error("La solicitud no fue exitosa");
          }
          return response.json();
        })
        .then((res) => {
          btn_submit.classList.remove("btn_enviar");
          btn_submit.classList.add("btn_enviar_correcto");
          btn_submit.textContent = "Enviado";
          espera.classList.add("d-none");
        })
        .catch((error) => console.log(" Error: " + error.message));
    }
  });

  var form_m = document.getElementById("registration-form-m");
  var btn_submit_n = document.getElementById("btn_submit_m");
  var espera_m = document.getElementById("espera_m");

  form_m.addEventListener("submit", function (event) {
    event.preventDefault();
    btn_submit_n.disabled = true;
    let estado =
      region_m.value === "Bolivia" &&
      select_departamento_m.value === "Seleccione...";
    if (estado) {
      select_departamento_m.focus();
      select_departamento_m.click();
      console.log(estado ? "si" : "no");
    } else {
      btn_submit_n.textContent = "Enviando";
      espera_m.classList.remove("d-none");
      const formData = new FormData(this);
      const url =
        "https://script.google.com/macros/s/AKfycbx0hIiQn0v1OfauGFb4jcbQHmI80dwd7mYtUncE-pSvpX7K7-RAYJWN_QCbfrhCC1bY/exec";
      fetch(url, { method: "POST", body: formData })
        .then((response) => {
          if (!response.ok) {
            throw new Error("La solicitud no fue exitosa");
          }
          return response.json();
        })
        .then((res) => {
          btn_submit_m.classList.remove("btn_enviar");
          btn_submit_m.classList.add("btn_enviar_correcto");
          btn_submit_m.textContent = "Enviado";
          espera_m.classList.add("d-none");
        })
        .catch((error) => console.log(" Error: " + error.message));
    }
  });
});
