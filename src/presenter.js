//import vacaToro from "./vacaToro";

const codigoSecreto = document.querySelector("codigo-secreto");
const intent = document.querySelector("#intento");
const form = document.querySelector("#inicio-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML = "<p>" + "HOLA" + "</p>";
});

