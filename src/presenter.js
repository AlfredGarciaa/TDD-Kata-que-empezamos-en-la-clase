import TorosYVacas from "./torosyvacas.js";

const form = document.querySelector("#codigosecreto-form");
const codigosecretoInput = document.querySelector("#codigosecreto");
const div = document.querySelector("#resultado-div");

const adivinarForm = document.querySelector("#adivinar-form");
const adivinarInput = document.querySelector("#adivinar");

let torosYVacas = "";

form.addEventListener("submit", (event) => 
{
  event.preventDefault();

  const codigosecreto = codigosecretoInput.value;
  torosYVacas = new TorosYVacas(codigosecreto);
});

adivinarForm.addEventListener("submit", (event) => 
{
  event.preventDefault();

  const intento = adivinarInput.value;

  div.innerHTML = "<p>" + torosYVacas.adivinar(intento) + "</p>";
});
