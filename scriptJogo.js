import { desistencia } from "./scriptMeio.js";
import { verificacao } from "./scriptMeio.js";
import { mostraNumeros } from "./scriptMeio.js";

var palpitefoco = document.querySelector("[data-input]");

mostraNumeros();
palpitefoco.focus();

const botaoTentar = document.querySelector('[data-botaoTentar]');
botaoTentar.addEventListener('click', verificacao);
const botaoDesistir = document.querySelector('[data-botaoDesistir]');
botaoDesistir.addEventListener('click', desistencia);

