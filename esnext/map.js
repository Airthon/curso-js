const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', { framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chavesVariavas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Números'],
])

chavesVariavas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log( chavesVariavas.has(123))
chavesVariavas.delete(123)
console.log(chavesVariavas.has(123))
console.log(chavesVariavas.size)

chavesVariavas.set(123, 'a')
chavesVariavas.set(123, 'b')

console.log(chavesVariavas)