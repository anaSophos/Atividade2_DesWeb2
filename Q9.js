function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function exemploAsync() {
    console.log('Olá!');
    await sleep(2000); // Aguarda 2 segundos sem bloquear a thread principal
    console.log('Depois de 2 segundos');
  }
  
  exemploAsync();
  