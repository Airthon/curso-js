const porta = 3003

const express = require ('express')
const app = express()

app.get('/produtos', (req, res, next) => {
    res.send ({ nome: 'Caneca', preco: 30.00}) // Converter para JSON
})

app.listen(porta, () =>{
    console.log(`Servidor está execuntando na porta ${porta}.`)
})