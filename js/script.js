
const totalEl = document.querySelector("#total");
const btnSomar = document.querySelector("#somar");
const btnZerar = document.querySelector("#zerar");

let contador = 0;

totalEl.textContent = contador;

btnSomar.addEventListener("click", () => {
  contador++;
  totalEl.textContent = contador;
});

btnZerar.addEventListener("click", () => {
  contador = 0;
  totalEl.textContent = contador;
});
