
const convidado1 = "Matheus";
const convidado2 = "Amanda";

console.log("Lista de convidados:", convidado1, convidado2);

const listaDeConvidados = ["Matheus", "Izabelli", "Amanda", "Paula"];

console.log("Bia fez aniversário e convidou:", listaDeConvidados);
console.log("Quantos convidados?", listaDeConvidados.length);

// 1. Matheus
// 2. Izabelli
// 3. Amanda
// 4. Paula

console.log("Convidado numero 1:", listaDeConvidados[0]);
console.log("Convidado numero 4:", listaDeConvidados[listaDeConvidados.length - 1]);
console.log("Convidado numero 3:", listaDeConvidados[2]);

const indiceAmanda = listaDeConvidados.indexOf("Amanda");
console.log("Amanda está em qual índice do nosso array?", indiceAmanda);
console.log("Amanda está em qual número da lista?", indiceAmanda + 1);

// const arrayQualquer = ["Beatriz", true, 24, {valor1: 10, valor2: 20}];
// console.log(arrayQualquer)