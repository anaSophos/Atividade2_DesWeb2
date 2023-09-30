function Funcao(value) {
    return Promise.resolve(value);
  }
  
const promises = [
Funcao(1),
Funcao(2),
Funcao(3),
];
  
Promise.all(promises)
.then((results) => {
    console.log("Resultados:", results); 
})
.catch((error) => {
    console.error("Ocorreu um erro:", error.message);
});
