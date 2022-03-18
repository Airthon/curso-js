const alunos = [
    { nome: 'Darle', nota: 7, bolsista: false},
    { nome: 'Maria', nota: 8.9, bolsista: true},
    { nome: 'João', nota: 7.9, bolsista: false},
    { nome: 'Ana', nota: 9.9, bolsista: true}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)