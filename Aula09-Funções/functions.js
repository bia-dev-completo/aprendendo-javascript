
// função sem parâmetros, e sem retorno
// function imprimir(){
//   console.log("Olá Mundo");
// }

// imprimir();

// function imprimir(impressao){
//   console.log(impressao);
// }

const imprimir = function(impressao){
  console.log(impressao);
}

imprimir("Olá Mundo");

// function calcularSoma(valor1, valor2){
//   return valor1 + valor2;
// }

const valor1 = 2;
const valor2 = 4;
const calcularSoma = function(valor1, valor2){
  return valor1 + valor2;
}

imprimir(`A soma entre ${valor1} e ${valor2} é ${calcularSoma(valor1, valor2)}`);
