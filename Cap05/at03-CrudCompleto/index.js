const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const bd = require('./bd')
const path = require('path')
const baseDir=path.join(__dirname, 'templates')

var porta = '3200'

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req, res)=>res.sendFile(`${baseDir}/index.html`))
app.get('/cadastrar', (req, res)=>res.sendFile(`${baseDir}/cadastrar.html`))

app.post('/cadastrar/:tabela', async (req, res)=>{
    try {
      let dados = Object.values(req.body).map((val)=>val)
      let tabela = req.params.tabela
      let respBd= await bd.inserir(tabela, dados)  
      res.json(respBd).status(200)
    } catch (erro) {
      res.json(erro).status(400)
    }
})

app.get('/consultar/:tabela',async (req, res) => {
  try {
  let tabela = req.params.tabela
  let respBd = await bd.ler(tabela)
  res.json(respBd).status(200)
  } catch (erro) {
    res.json(erro).status(400)
  }
})
app.get('/consultar/:tabela/:id',async (req, res) => {
    try {
      let {tabela, id}= req.params
    let respBd = await bd.ler(tabela, id)
    res.json(respBd).status(200)
    } catch (erro) {
      res.json(erro).status(400)
    }
  })

  app.put('/editar/:tabela/:id', async (req, res) => {
    try {
      let {tabela, id} = req.params
      let dados = Object.values(req.body).map((val)=>val)
      let respBd = await bd.atualizar(tabela, dados, id)
      res.json(respBd).status(200)
    } catch (erro){
      res.json(erro).status(400)
    }
      
  })
  app.delete('/excluir/:tabela/:id', async (req, res) => {
    try {
      let {tabela, id} = req.params
      let respBd = await bd.deletar(tabela, id)
      res.json(respBd).status(200)
    } catch (erro) {
      res.json(erro).status(400)
    }
  })

app.listen(porta, ()=>console.log(`Servidor rodando em: http://localhost:${porta}`))