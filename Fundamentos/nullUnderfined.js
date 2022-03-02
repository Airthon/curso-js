let valor // não inicialixada
console.log(valor)

valor = null //ausência de valor
console.log(valor)
// console.log(valor.toString()) erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 2.30
console.log(produto)

produto.preco = undefined // evitar atribuir underfined
console.log(!!produto.preco)
// delete preduto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)