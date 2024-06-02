'use strict';

const nome = "Beatriz"; // tipo: String
const idade = 24; // tipo: Number
console.log("Nome: ", nome);
console.log("Idade: ", idade);

let temCabeloCurto = false; // Boolean
temCabeloCurto = true;
console.log("Tem cabelo curto? ", temCabeloCurto);

//const profissao; Não é permitido usar const para variaveis sem valor atribuído.
let profissao; // tipo: Undefined
console.log("Profissão: ", profissao);

let carro = "Yaris";
carro = "Kicks";
carro = null; // tipo: Null
console.log("Qual o carro da Bia?", carro); 

const dadosDaBia = {
  nome,
  idade,
  temCabeloCurto,
  profissao,
  carro
}
console.log("Dados da Bia: ", dadosDaBia);
console.log("Idade da Bia: ", dadosDaBia.idade);

const dadosDoMatheus = {
  nome: "Matheus", // "nome" é a chave & "Matheus" é o valor
  idade: "25",
  temCabeloCurto: true,
  profissao: "Programador",
  carro: null
}
console.log("Dados do Matheus: ", dadosDoMatheus);
console.log("Matheus tem cabelo curto? ", dadosDoMatheus.temCabeloCurto);
