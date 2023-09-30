const fs = require('fs').promises;
const path = require('path');

async function ObterSubdiretorios(caminho) {
    try {
        const arquivos = await fs.readdir(caminho);
        const subdiretorioss = [];

        await Promise.all(arquivos.map(async (file) => {
            const fullPath = path.join(caminho, file);
            const stats = await fs.stat(fullPath);

            if (stats.isDirectory()) {
                subdiretorioss.push(fullPath);
            }
        }));

        return subdiretorioss;
    } catch (error) {
        throw error;
    }
}

ObterSubdiretorios('./diretoryTesteQ10')
    .then((subdiretorioss) => {
        console.log("Subdiretórios:", subdiretorioss);
    })
    .catch((err) => {
        console.error(err);
    });