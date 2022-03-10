// Pessoa -> 123 -> {...}
const pessoa = { nome: 'Darle'}
pessoa.nome = 'Pessoa'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = { nome: 'Darle'}
Object.freeze(pessoa)

pessoa.nome = 'Airthon'
console.log(pessoa.nome)