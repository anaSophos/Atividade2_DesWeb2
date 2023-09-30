async function buscarDadosEmAPI() {
    const resposta = await fetch('https://exemplo.com/api/dados');
  
    if (resposta.status !== 200) {
      throw new Error('Falha na busca de dados na API');
    }
  
    const dados = await resposta.json();
    return dados;
  }
  
  (async () => {
    try {
      const dados = await buscarDadosEmAPI();
      console.log('Dados da API:', dados);
    } catch (erro) {
      console.error('Erro ao buscar dados na API:', erro.message);
    }
  })();
  