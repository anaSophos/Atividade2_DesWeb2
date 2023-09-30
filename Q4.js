//verificar se a pessoa é maior de idade

async function maiorIdade(idade){
    const promise = new Promise((resolve, reject)=>{
        if(idade>=18){
            const messageResolve = "É maior de idade"
            resolve(messageResolve)
        }
        else{
            reject(new Error("É menor de idade"));
        }
    })
    return promise
}

maiorIdade(18)
    .then(result => console.log(result))
    .catch(error => console.error(error))
