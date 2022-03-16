const produtos = [
    {nome: 'Canecas', preco: 28, fragil: true},
    {nome: 'Caneca vermelha', preco: 45, fragil: true},
    {nome: 'Caneca Plastico', preco: 25, fragil: false}
]

console.log(produtos.filter(function(p){
    return false
}))

const caro = produtos => produtos.preco >= 26
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))