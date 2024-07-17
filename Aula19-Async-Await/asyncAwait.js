const getHarryPotterHouses = async () => {
  try {
    const resposta = await fetch('https://potterapi-fedeperin.vercel.appp/pt/houses');
    const dados = await resposta.json();
    if (dados.error){
      throw new Error(data.error);
    }
    if (!resposta.ok){
      throw new Error('Ops! Algo deu errado!');
    }
    console.log("Dados: ", dados);
  } catch (err){
    console.log(err);
  }
 
}

getHarryPotterHouses();