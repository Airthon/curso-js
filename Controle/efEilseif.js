Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResiltado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honrra')
    } else if (nota.entre(7, 8.5)) {
        console.log('Aprovado')
    } else if(nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(1, 3.88)) {
        console.log('Reprovado')
    }

}

imprimirResiltado(10)
imprimirResiltado(6)
imprimirResiltado(2)
