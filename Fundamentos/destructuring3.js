function rand({ min = 0, max = 10}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 10, min: 7}
console.log(rand(obj))
console.log(rand({ min: 9 }))
