const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Fala amigo...' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome ou valor

const Cliente = {
    nome: 'Darle',
    idadde: 31,
    peso: 85, 
    endereco: {
        logrodouro: 'Rua Muito Boa',
        numero: 26
    }
}

console.log(saudacao)
console.log(exec())