const notasFinais = [
  {nome: "Beatriz", nota: 5},
  {nome: "Matheus", nota: 7},
  {nome: "Amanda", nota: 10},
  {nome: "Paula", nota: 5},
]

// for (let i = 0; i < notasFinais.length; i++){
//   if (notasFinais[i].nota >= 6){
//     console.log(`O aluno ${notasFinais[i].nome} está aprovado com ${notasFinais[i].nota}`)
//   } else {
//     console.log(`O aluno ${notasFinais[i].nome} está reprovado com ${notasFinais[i].nota}`)
//   }
// }

// for (let aluno of notasFinais){
//   if (aluno.nota >= 6){
//     console.log(`O aluno ${aluno.nome} está aprovado com ${aluno.nota}`)
//   } else {
//     console.log(`O aluno ${aluno.nome} está reprovado com ${aluno.nota}`)
//   }
// }

notasFinais.forEach((aluno) => {
  if (aluno.nota >= 6){
    console.log(`O aluno ${aluno.nome} está aprovado com ${aluno.nota}`)
  } else {
    console.log(`O aluno ${aluno.nome} está reprovado com ${aluno.nota}`)
  }
});









