const express = require('express')
const app = express()
const consign=require('consign')
var porta = '3000'
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Configura o Express p/ usar o EJS como View engine
app.set('view engine','ejs')

//Define diretório para arquivos estaticos(css, imagens, js(front-end))
app.use(express.static('public'))

consign()
    .include('./controllers/rotas')
    .into(app)

app.get(`/`, async (req, res)=>res.render('index'))

app.listen(porta, ()=>console.log(`Servidor rodando em: http://localhost:${porta}`))