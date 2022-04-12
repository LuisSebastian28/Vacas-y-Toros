import vacaToro from "./vacaToro";
import separarCodigo from "./separador";

const numIntentos = document.querySelector("#intentos");
const codigoSecreto = document.querySelector("#codigo-secreto");
const intent = document.querySelector("#intento");
const form = document.querySelector("#inicio-form");
const form2 = document.querySelector("#intento-form");
const div = document.querySelector("#resultado-div");
let secreto;
let intentos;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  secreto = Number.parseInt(codigoSecreto.value);
  intentos = Number.parseInt(numIntentos.value);
  form.reset();
});

form2.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number.parseInt(intent.value);
  let juego = new vacaToro();
  let resultado = juego.compararCodigo(secreto,firstNumber);
  intentos--
  if(intentos==0){
    div.innerHTML = "<p>" + "Perdiste el juego por falta de intentos. " +" El codigo secreto era: "+ secreto +"</p>";
  }
  else{
    div.innerHTML = "<p>" + resultado + " Te quedan: " + intentos + " intentos" + "</p>";
  }
});
