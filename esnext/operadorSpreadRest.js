const funcionario = { nome: 'Darle', salario: 5500}
const clone = { ativo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupoA = [ 'Darle', 'tete', 'Gloria']
const grupoFinal = [ 'Maria', ...grupoA, 'Anita']

console.log(grupoFinal)