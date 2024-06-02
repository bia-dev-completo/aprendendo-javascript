
const idadeMaria = 16;
const maioridade = 18;

if (idadeMaria >= 18){
  console.log("Maria pode dirigir");
} else {
  const anosFaltantes = maioridade - idadeMaria;
  console.log("Maria NÃO pode dirigir");
  console.log(`Faltam ${anosFaltantes} anos para Maria poder dirigir.`);
}

// operadores ternários
// idadeMaria >= maioridade 
//   ? console.log("Maria pode dirigir") 
//   : console.log("Maria NÃO PODE dirigir");

console.log("--------------------");

const idadePessoa = 10;

// 0 a 12 anos -> infância
// 13 a 17 anos -> adolescência
// 18 a 25 anos -> jovem adulto
// 26 a 60 anos -> adulto
// mais que 60 anos -> idoso

if (idadePessoa >= 0 && idadePessoa <= 12){
  console.log("Infância");
} else if (idadePessoa >= 13 && idadePessoa <= 17){
  console.log("Adolescência");
} else if (idadePessoa >= 18 && idadePessoa <= 25){
  console.log("Jovem Adulto");
} else if (idadePessoa >= 26 && idadePessoa <= 60){
  console.log("Adulto");
} else {
  console.log("Idoso");
}

// essa forma funciona, mas é menos otimizada
// if (idadePessoa >= 0 && idadePessoa <= 12){
//   console.log("Infância");
// }

// if (idadePessoa >= 13 && idadePessoa <= 17){
//   console.log("Adolescência");
// }

// if (idadePessoa >= 18 && idadePessoa <= 25){
//   console.log("Jovem Adulto");
// }

// if (idadePessoa >= 26 && idadePessoa <= 60){
//   console.log("Adulto");
// }

// if (idadePessoa >= 61) {
//   console.log("Idoso");
// }

const x = 20;

if (x % 2 === 0){
	console.log(`O número ${x} é par`);
}

if (x % 5 === 0){
	console.log(`O número ${x} é múltiplo de 5`);
}

console.log('--------------------');

const diaDaSemana = 3;
let nomeDoDia;

switch (diaDaSemana){
  case 0:
    nomeDoDia = "Domingo";
  break;
  case 1:
    nomeDoDia = "Segunda";
  break;
  case 2:
    nomeDoDia = "Terça";
  break;
  case 3:
    nomeDoDia = "Quarta";
  break;
  case 4:
    nomeDoDia = "Quinta";
  break;
  case 5:
    nomeDoDia = "Sexta";
  break;
  case 6:
    nomeDoDia = "Sábado";
  break;
}

console.log("Dia da semana " + nomeDoDia);