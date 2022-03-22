const alunos = [
    { nome: 'João', nota: 7.0},
    { nome: 'Darle', nota: 9.2}
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
} 

console.log(total1 / alunos.length)

// declarativa

