Array.prototype.map2 = function(callback){
    const newArray = []
        for (let i = 0; i < this.length; i++){
            newArray.push(callback(this[i], i, this))
        }
        return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "Preco":3.45}',
    '{"nome": "Caderno", "Preco": 3.00}',
    '{"nome": "Caneca", "Preco": 28.00}',
    '{"nome": "Caneta", "Preco": 5.00}'
]
// Retorna um array apnas com os preços


const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.Preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)