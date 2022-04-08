// ES8: Object.values/Object.enties
const obj = { a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Litaral
const nome = 'Darle'
const pessoa = {
    nome,
    ola(){
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar () {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())