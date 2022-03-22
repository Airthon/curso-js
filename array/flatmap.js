const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Darle',
        nota: 8.1
    },{
        nome: 'Ana',
        nota: 7.0
    }]

}, {
    nome: 'Turma M2',
    alunos: [{
    nome: 'Aluno1',
    nota: 6.0
},{
    nome: 'Aluno2',
    nota: 8.0
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)