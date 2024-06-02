// 👉 Operadores lógicos

console.log("-----------------------------OPERADORES LÓGICOS------------------------------");

// AND / OR / NOT
// E / OU / NEGAÇÃO

console.log("Maria foi parada em uma blitz.");

const idadeMaria = 19;
const mariaPossuiCNH = false;
console.log("Idade Maria: ", idadeMaria);
console.log("Maria possui CNH? ", mariaPossuiCNH);

// console.log("Maria vai ser presa? ", idadeMaria > 18 && mariaPossuiCNH === true);
console.log("Maria vai ser presa? ", idadeMaria >= 18 && !mariaPossuiCNH); // ambas as formas de escrever estão corretas

// ------------------------------------------------------------------------------------------

console.log("Maria foi para a balada, e na entrada tinha que mostrar o documento.");

const mariaPossuiRG = true;
console.log("Maria estava com seu RG? ", mariaPossuiRG);

console.log("Maria é maior de idade? ", idadeMaria >= 18);
console.log("Maria conseguiu comprovar isso?", mariaPossuiCNH === true || mariaPossuiRG === true);
console.log("Maria conseguiu entrar na balada!");

// ------------------------------------------------------------------------------------------

const gostaDeBeber = true;

const mariaGostaDeBeber = !gostaDeBeber; // usamos "!" para negar um valor. Logo, Maria não gosta de beber.
console.log("Maria gosta de beber? ", mariaGostaDeBeber);
