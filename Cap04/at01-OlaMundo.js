const express = require('express')
var app = express()//Instância do módulo Express
var porta = '3200' //Variavel com o numedo da porta usada pelo app 

//Recebe uma requisição HTTP do tipo get
app.get('/', function (req, res){
    res.send('Olá Mundo!') //Emite a resposta para da requisição
})

//Coloca o servidor em execução para estutar e responder requisições HTTP
app.listen(porta, function(){ 
    console.log(`Servidor rodando em: http://localhost:${porta}`)
})