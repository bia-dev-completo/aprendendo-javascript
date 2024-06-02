// 👉 Operadores de atribuição

console.log("-----------------------------OPERADORES DE ATRIBUIÇÃO------------------------------");

let salarioLiquidoAbril = 5000;
const PLR = 3000;

//salarioLiquidoAbril = salarioAbril + PLR;

//ou

salarioLiquidoAbril += PLR; // += operador de Atribuição com adição
console.log("Salário de Abril com PLR: ", salarioLiquidoAbril);

let salarioMaio = 7000;
const descontosMaio = 2000;

salarioMaio -= descontosMaio; // -= operador de Atribuição com subtração
console.log("Salário de Maio: ", salarioMaio);

//---------------------------CASAMENTO DA BIA---------------------------------------

let valorCasamento = 500;
const numeroConvidados = 150;
console.log("Custo por pessoa do casamento: ", valorCasamento);
console.log("Número de convidados: ", numeroConvidados);

valorCasamento *= 150; // *= operador de Atribuição com multiplicação
console.log("Valor total do casamento: ", valorCasamento);

// ---------------------------------------------------------------------------------

const x = 10;
const y = 20;
const z = "10";

console.log("O número " + x + " é igual ao número " + y, x === y); // === operador de Igualdade Estrita
console.log("O número " + x + " NÃO é igual à string " + z, x == z); // == operador de Igualdade Frouxa
console.log("O número " + x + " é igual ao número " + z, x == z);

// SEMPRE UTILIZE === PARA FAZER OPERAÇÕES DE IGUALDADE