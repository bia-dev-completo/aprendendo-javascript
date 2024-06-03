// Spread operators em arrays

const listaBia = ["Maria", "Beatriz", "Matheus"];

// const listaMaeBia = [listaBia[0], listaBia[1], listaBia[2], "Sérgio", "Valdete"];

// const listaMaeBia = [...listaBia, "Sérgio", "Valdete"];
// const listaMaeBia = ["Sérgio", ...listaBia, "Valdete"];
// console.log("listaMaeBia: ", listaMaeBia);

console.log("listaBia", listaBia);

const listaBia2 = [...listaBia];

listaBia2.push("Leonardo");

console.log("listaBia2", listaBia2);
console.log("--------------------")

// -------------------------------------

//Spread operators em objetos

const professor1 = {
	materia: "Matematica",
	escola: "Escola Bia codes",
	nome: "Beatriz",
}

const professor2 = {
  ...professor1,
  nome: "Décio"
}

console.log("Professor 1", professor1);
console.log("Professor 2", professor2);