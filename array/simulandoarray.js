const quaseArray = { 0: 'Darle', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString',{
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(quaseArray)

const meuArray = ['Rafael', 'Darle', 'Bia']
console.log(quaseArray.toString(),)