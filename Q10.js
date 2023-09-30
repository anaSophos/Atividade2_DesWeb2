const fs = require('fs');

async function readdirPromise(caminho){
    const promise = new Promise((resolve, reject) =>{
        fs.readdir(caminho, (err, files) => {
            if(err){
                reject(err = "Erro ao ler o arquivo")
            } else{
                resolve(
                    files.forEach((files) =>{
                        console.log(files)
                    })
                )
            }
        })
    })
}

readdirPromise('./diretoryTesteQ10')
    .then(result => console.log(result))
    .catch(err => console.error(err))
