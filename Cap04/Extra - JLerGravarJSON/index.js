const express = require('express')
const app = express()
const rwJSON = require('./fsJSON')
const path = require('path')
const baseDir=path.join(__dirname, 'templates')
var porta = '3200'
var arquivo = 'pets.json'
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req, res)=>res.sendFile(`${baseDir}/index.html`))
app.get('/cadastrar', (req, res)=>res.sendFile(`${baseDir}/cadastrar.html`))

app.get('/registros', (req, res)=>{
    let dados;
    dados = rwJSON.lerJSON(arquivo)
    dados = rwJSON.converterJSON_Obj(dados)
    res.json(dados)
})

app.post('/cadastrar', (req, res)=>{
    let dado = req.body
    let dados = rwJSON.lerJSON(arquivo)
    dados = rwJSON.converterJSON_Obj(dados)
    dados.push(dado)
    dados = rwJSON.converterObj_JSON(dados)
    rwJSON.salvarJSON(dados, arquivo)
    res.json(dado)
})

app.listen(porta, ()=>console.log(`Servidor rodando em: http://localhost:${porta}`))
