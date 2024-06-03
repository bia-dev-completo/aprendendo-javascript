// Valores Truthy e Valores Falsy

// sao diferentes de true e false


// Valores falsy no JS:
// 0, "", undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));


// Exemplos de valores truthy (valores que quando convertidos para boolean sao true);
// console.log("1:", Boolean(1));
// console.log("Olá Mundo:", Boolean('Olá Mundo'))
// console.log("Objeto:", Boolean({valor1: 1, valor2: 2}))
// console.log("Array:", Boolean([1,2]))
// console.log("Array vazio:", Boolean([]))
// console.log("Objeto vazio:", Boolean({}))

const nomes = ['Maria', 'João', '', 'Matheus'];
console.log("nomes: ", nomes);

// const nomesFiltrados = nomes.filter((nome) => nome);
// console.log("nomesFiltrados: ", nomesFiltrados);

nomes.forEach(nome => {
	if(nome){
		console.log("é truthy: ", nome)
	}
});

const x = 10;
const y = null;

// if (x){
//   console.log("X é uma variável truthy")
// }


if (y){
  console.log("Y é uma variável truthy")
}