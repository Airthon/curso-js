const fs = require('fs')

const produto = {
    nome: 'Caneca',
    preco: 30.00
    desconto: 0.10
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})