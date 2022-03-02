// novo recurso co ES2015

const pessoa = {
    nome: 'Darle',
    idade: 31,
    endereco: {
        logradouro: 'Lagoa Nova',
        numero: 10
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n,i)


const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

//const { conta: {an, num}} = pessoa
//console.log(ag, num)