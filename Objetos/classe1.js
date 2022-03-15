class Lancamento {
    constructor(nome = 'Generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.Lancamento = []
    }
    addLancamento(...Lancamento){
        Lancamento.forEach(l => this.Lancamento.push(l))
    }

    sumario() {
        let valorConsolidade = 0
        this.Lancamento.forEach(l => {
            valorConsolidade += l.valor
        })
        return valorConsolidade
    }
}

const salario = new Lancamento('Salario', 50000)
const contaDeLuz = new Lancamento('Luz', -400)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamento(salario, contaDeLuz)
console.log(contas.sumario())