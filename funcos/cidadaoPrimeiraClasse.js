// Funçao de JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() { }

// armazenar em uma variável
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um artributi de ojeto
const Obj = {}
Obj.falar = function () { return 'Opa'}
console.log(Obj.falar())

// Passar fonção como param
function run(fun){
    fun()
}

run(function () { console.log('Executando...')})

// Uma função pode retornar/ 