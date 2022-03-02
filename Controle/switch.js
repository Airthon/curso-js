const imprimirResiltado = function (nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break // sem o break ele execulta um efeito em cascata.
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: // sintaxi com , EX: 6, 5 não da certo.
            console.log('Aprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResiltado (9)
imprimirResiltado(3)