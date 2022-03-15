// Object.preventExtension
const produto = Object.preventExtensions({
    nome: 'Caneca', preco: 28, tag: 'Promoção'
})
console.log('Extensíval:', Object.isExtensible(produto))

produto.nome = 'Caneca Vermelha'
produto.descricao = 'Caneca Porcelana'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = {nome: 'Caneca', Preço: 28}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.preco = 29
console.log(pessoa)