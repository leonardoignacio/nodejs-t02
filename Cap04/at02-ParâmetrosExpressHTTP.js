const app = require('express')()
var porta = '3200'
//Parâmetros opcionais acrescentar '?', exemplo '/:nome?'
app.get('/bemvindo/:nome', (req, res)=>{
    let nome = req.params.nome //Acesso ao parâmetro "nome"
    res.send(`<h1>Olá ${nome}, seja bem vindo!</h1>`)
})
app.listen(porta, ()=>console.log(`Servidor rodando em: http://localhost:${porta}`))