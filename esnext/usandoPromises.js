// com promise....
const http = require('http')
const { resolve } = require('path')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resilve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () =>{
                try {
                    resolve(JSON.parse(resultado))
                } catch(e){
                    reject(e)
                }
            })
        })
    })
}
Promise.all([getTurma('A'), getTurma('B')])
    .then(x => console.log(x))
    .then(turma => [].cibcat(...turmas))