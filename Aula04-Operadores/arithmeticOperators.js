// 👉 Operadores aritméticos

console.log("------------------------------OPERADORES ARITMÉTICOS------------------------------");

//----------------------------SALÁRIO------------------------------------------------

const salario = 5000;
const valeAlimentação = 1000;

const caiNaConta = salario + valeAlimentação; // 👉 operador de soma
console.log("Salario + Vale Alimentação: ", caiNaConta);

const salarioBruto = 7000;
const descontos = 2000;

const salarioLiquido = salarioBruto - descontos; // 👉 operador de subtração
console.log("Salario Bruto - Descontos: ", salarioLiquido);

//---------------------------CASAMENTO DA BIA---------------------------------------

const valorBuffetPorPessoa = 150;
const totalConvidados = 100;

const valorTotalBuffet = valorBuffetPorPessoa * totalConvidados; // 👉 operador de multiplicação
console.log("Valor total do Buffet do casamento: ", valorTotalBuffet);

const custoTotalCasamento = 50000;
const custoPorConvidad0 = custoTotalCasamento / totalConvidados; // 👉 operador de divisão
console.log("Custo total por convidado: ", custoPorConvidad0)

//---------------------------NÚMEROS PARES E ÍMPARES---------------------------------

let numero = 10
console.log(`O resto da divisão do número ${numero} por 2 é 0?`, numero % 2 === 0);

numero = 'PAR';
console.log("Então o número é" + numero);

numero = 11;
console.log(`O resto da divisão do número ${numero} por 2 é 0?`, numero % 2 === 0);

numero = 'ÍMPAR';
console.log("O número agora é" + numero);
