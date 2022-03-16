Array.prototype.filter2 = function(callback){

    const newArray = []
    for ( let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray

}
const produtos = [
    {nome: 'Canecas', preco: 28, fragil: true},
    {nome: 'Caneca vermelha', preco: 45, fragil: true},
    {nome: 'Caneca Plastico', preco: 25, fragil: false}
]


const caro = produtos => produtos.preco >= 26
const fragil = produtos => produtos.fragil

console.log(produtos.filter2(caro).filter2(fragil))