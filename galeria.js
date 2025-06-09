document.addEventListener("DOMContentLoaded", function () {
  const contadorElemento = document.getElementById("contador-dias");

  const inicio = new Date(2025, 9, 30); // 30 de Outubro de 2025
  const hoje = new Date();

  let anos = hoje.getFullYear() - inicio.getFullYear();
  let meses = hoje.getMonth() - inicio.getMonth();
  let dias = hoje.getDate() - inicio.getDate();

  if (dias < 0) {
    meses--;
    const ultimoDiaDoMesAnterior = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
    dias += ultimoDiaDoMesAnterior;
  }

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  const totalDias = dias;
  const semanas = Math.floor(totalDias / 7);
  const diasRestantes = totalDias % 7;

  let texto = "";

  if (anos > 0) texto += `${anos} ano${anos > 1 ? "s" : ""}, `;
  texto += `${meses} mes${meses > 1 ? "es" : ""}, `;
  texto += `${semanas} semana${semanas > 1 ? "s" : ""} e `;
  texto += `${diasRestantes} dia${diasRestantes !== 1 ? "s" : ""}`;

  contadorElemento.textContent = texto;
});
