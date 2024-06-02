const listaDeConvidados = ["Matheus", "Izabelli", "Amanda", "Paula"]; 

// Push / Pop / Shift / Unshift

listaDeConvidados.pop(); // remove o último item do array

listaDeConvidados.push("Leonardo"); // adiciona no final do array
listaDeConvidados.unshift("Beatriz") // adiciona como 1º do array
listaDeConvidados.shift(); // remover o primeiro item da lista

console.log(listaDeConvidados);
console.log("Paula está na lista? ", listaDeConvidados.includes("Paula"));
