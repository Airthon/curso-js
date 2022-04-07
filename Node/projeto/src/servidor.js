const porta = 3003

const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancodeDados')

app.use(bodyParser.urlencoded({ extended: true}))


app.get('/produtos', (req, res, next) => {
    res.send ({ nome: 'Caneca', preco: 30.00}) // Converter para JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) +>{
    const produto = bancoDeDados.salverProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})
app.listen(porta, () =>{
    console.log(`Servidor está execuntando na porta ${porta}.`)
})