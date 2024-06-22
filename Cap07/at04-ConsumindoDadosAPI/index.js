const express = require('express')
const app = express()
const consign = require('consign')
const axios = require('axios')
global.urlServer = 'http://localhost:3200'
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

    app.get(`/`, async (req, res)=>{ 
        const rota = 'pets'
        let uri=`${urlServer}/${rota}`
        let dados = await axios.get(uri) 
        dados = [...dados.data] 
        res.render('index', {dados:dados}) 
        }) 

app.listen(porta, ()=>console.log(`Servidor rodando em: http://localhost:${porta}`))