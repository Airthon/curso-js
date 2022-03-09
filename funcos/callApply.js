function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Caneca',
    preco: 32,
    desc: 0.1,
    getPreco
}

global.preco = 32
globalThis.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const canecapreta = { preco: 60, desc: 0.1 }

console.log(getPreco.call(canecapreta))
console.log(getPreco.apply(canecapreta))

console.log(getPreco.call(canecapreta, 0.09, 'R$'))