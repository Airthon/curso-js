// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Template String
const produto = 'Caneca'
console.log(`${produto} é Boa!`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [ 1, 2, 3]
console.log(x, y)

const {idade: i, nome} = { nome: 'Darle', idade: 30 }
console.log(i, nome)