const distanciaEmMetros = [1000, 1500, 2000, 2500, 3000, 3500, 4000];

// MAP

const distanciasEmKm = distanciaEmMetros.map(distancia => distancia / 1000);
console.log("Distancia em KM: ", distanciasEmKm)

// FILTER
const itensFiltrados = distanciaEmMetros.filter((distancia) => {
  if (distancia > 2000) return distancia;
});

//const itensFiltrados = distanciaEmMetros.filter((distancia) => distancia > 2000);

console.log("Itens filtrados: ", itensFiltrados);

// REDUCE

// distanciaEmMetros.reduce();

const distanciaTotal = distanciaEmMetros.reduce((acc, distancia) => {
  return acc + distancia
});

console.log("Distancia Total: ", distanciaTotal);