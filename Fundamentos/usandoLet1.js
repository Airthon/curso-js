// variaveis tem 3 escopos de bloco em quanto a VAR só tem 2
let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)