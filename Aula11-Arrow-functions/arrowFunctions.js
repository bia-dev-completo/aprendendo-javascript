// function calcularSoma(valor1, valor2){
//   return valor1 + valor2;
// }

// const calcularSoma = function(valor1, valor2){
//   return valor1 + valor2;
// }

const calcularSoma = (valor1, valor2) => valor1 + valor2;

const valor1 = 10;
const valor2 = 20;

const resultadoSoma = calcularSoma(valor1, valor2);

console.log(`Resultado da soma de ${valor1} + ${valor2}: ${resultadoSoma}`);

const imprimir = impressao => console.log(impressao);

imprimir("Olá Mundo");