document.addEventListener("DOMContentLoaded", function () {
  var region = document.getElementById("region");
  var region_m = document.getElementById("region_m");
  var departamento = document.getElementById("departamento");
  var departamento_m = document.getElementById("departamento_m");
  var select_departamento = document.getElementById("select_departamento");
  var select_departamento_m = document.getElementById("select_departamento_m");
  var area_experiencia_1 = document.getElementById("area_experiencia_1");
  var area_experiencia_2 = document.getElementById("area_experiencia_2");
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

  var btn_submit = document.getElementById("btn_submit");
  var form = document.getElementById("registration-form");
  var espera = document.getElementById("espera");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    btn_submit.disabled = true;
    let expe = area_experiencia_1.value == ".";
    let estado =
      region.value === "Bolivia" && select_departamento.value === ".";
    if (estado) {
      btn_submit.disabled = false;
      select_departamento.focus();
      select_departamento.click();
    } else if (expe) {
      btn_submit.disabled = false;
      area_experiencia_1.focus();
    } else {
      btn_submit.disabled = true;
      btn_submit.textContent = "Enviando";
      espera.classList.remove("d-none");
      const formData = new FormData(this);
      const url =
        "https://script.google.com/macros/s/AKfycbxSpT4Htx0tcDeo4GyUSGtIyiEFhuDyjnTWxdEKqVoG0mWlG-kAYuRM54MRXOo8N-xz/exec";
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
    let exper = area_experiencia_2.value == ".";
    let estado =
      region_m.value === "Bolivia" && select_departamento_m.value === ".";
    if (estado) {
      btn_submit_n.disabled = false;
      select_departamento_m.focus();
      select_departamento_m.click();
      console.log(estado ? "si" : "no");
    } else if (exper) {
      area_experiencia_2.focus();
      btn_submit_n.disabled = false;
    } else {
      btn_submit_n.textContent = "Enviando";
      espera_m.classList.remove("d-none");
      const formData = new FormData(this);
      const url =
        "https://script.google.com/macros/s/AKfycbxSpT4Htx0tcDeo4GyUSGtIyiEFhuDyjnTWxdEKqVoG0mWlG-kAYuRM54MRXOo8N-xz/exec";
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
