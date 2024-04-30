const express = require('express')
const app = express()
var db = require('./db')
const path = require('path')
const baseDir=path.join(__dirname, 'templates')
var porta = '3200'
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get('/', (req, res)=>res.sendFile(`${baseDir}/index.html`))
app.get('/cadastrar', (req, res)=>res.sendFile(`${baseDir}/cadastrar.html`))
//rota do tipo GET para obter os dados
app.get('/registros', (req, res)=>{ 
    let dados;
    //ler dados
    db.find({}).exec((err, dados)=>{
        if (err) {
            res
                .status(400)
                .json(err)
        } else {
            res
                .status(200)
                .json(dados)
        }
    })
})
//rota do tipo POST para enviar dados dentro da requisição
app.post('/cadastrar', (req, res)=>{ 
    //Salvar dados
    db.insert(req.body, (err, dados)=>{
        if (err){
            res
                .status(400)
                .json(err)
        } else{
            res
                .status(200)
                .json(dados)
        }
    })
})
app.listen(porta, ()=>console.log(`Servidor rodando em: http://localhost:${porta}`))
