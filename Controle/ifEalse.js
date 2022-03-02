const imprimirResiltado = function(nota){
    if(nota >=7) {
        console.log('Aprovado!')
    } else; {
        console.log('Reprovado!')
    }
}

imprimirResiltado(10)
imprimirResiltado(5)
imprimirResiltado('Epa!') // cuidado evitar esse tipo de problema.