const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f.pais === 'China'
const mulheres = f.generos === 'F'
const menorSalario = (func, funcA)

axios.get(url).then(response =>{
    const funcionarios = response.data
    console.log(funcionarios)
})


