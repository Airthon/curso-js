const alunos = [
    { nome: 'Darle', nota: 7, bolsista: false},
    { nome: 'Maria', nota: 8.9, bolsista: true},
    { nome: 'João', nota: 7.9, bolsista: false},
    { nome: 'Ana', nota: 9.9, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsista?
const todosBolsistas = ( resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Alguns alunos é bolsista?
const AlgunsBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(AlgunsBolsistas))