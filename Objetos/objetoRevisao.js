// coleçao dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Caneca'
produto['marca do produto'] = 'Generica'
produto.preco = 28

console.log(produto)
delete produto.preco
delete produto['namarca do produto']
console.log(produto)

const carro = {
    modelo: 'Ford Chev',
    valor: 90000,
    proprietario: {
        nome: 'Darle',
        idade: 31,
        endereco: {
            logradouro: 'Lagoa Nova',
            numero: 10
        }
    },
    condutores: [{
        nome: 'Pessoa',
        idade: 21
    }, {
        nome: 'Pessoa2',
        idade: 19
    }],
    calcularValoresSeguro: function(){
        // ....
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro']
console.log(carro)

// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValoresSeguro
console.log(carro)
console.log(carro.condutores)
console.log.apply(carro.condutores.calcularValoresSeguro)