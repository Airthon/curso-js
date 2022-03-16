const carrinho = [
    '{ "nome": "Borracha", "Preco":3.45}',
    '{"nome": "Caderno", "Preco": 3.00}',
    '{"nome": "Caneca", "Preco": 28.00}',
    '{"nome": "Caneta", "Preco": 5.00}'
]
// Retorna um array apnas com os preços


const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.Preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)