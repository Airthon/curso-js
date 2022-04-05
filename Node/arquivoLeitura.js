const fs = require('fs')

const caminha = __dirname + '/aquivo.json'

// sincrono
const conteudo = fs.readFileSync(caminha, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'uft-8', ( err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Constúdo da pasta...')
    console.log(arquivos)
})