// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new produto('Caneca', 31, 0.10)
const p2 = new produto('Caneca Vermelha', 45, 0.10)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Darle', 5000, 4)
const f2 = criarFuncionario('Pessoa', 14000, 5)
console.log(f1.getSalario(), f2.getSalario())

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{ "info": "Sou um JSON"}')
console.log(fromJSON.info)
