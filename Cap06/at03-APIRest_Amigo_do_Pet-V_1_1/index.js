const express = require('express')
const app = express()
const consign=require('consign')
const usuario = new require('./models/usuario')
const pet = new require('./models/pet')
const doacao = new require('./models/doacao')
var porta = '3200'
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.get('/', (req, res)=>res.send('API - Amigo do Pet'))

consign()
    .include('./controllers/rotas')
    .into(app)


app.listen(porta, ()=>console.log(`Servidor rodando em: http://localhost:${porta}`))