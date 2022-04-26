import TorosYVacas from "./torosyvacas.js";

const form = document.querySelector("#codigosecreto-form");
const codigosecretoInput = document.querySelector("#codigosecreto");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => 
{
  event.preventDefault();

  const codigosecreto = codigosecretoInput.value;
  const torosyvacas = new TorosYVacas(codigosecreto);

  div.innerHTML = "<p>" + codigosecreto + "</p>";
});
