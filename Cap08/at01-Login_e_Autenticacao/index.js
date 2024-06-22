const express = require('express') 
const app = express() 
const cors = require('cors') 
app.use(cors()) 
const cookieParser = require('cookie-parser') 
app.use(cookieParser()) 
const consign=require('consign') 
const requests = require('./controllers/requests') 
var porta = '3000'
global.urlServer = 'http://localhost:3200'
app.use(express.urlencoded({extended:true})) 
app.use(express.json()) 
// Configura o Express p/ usar o EJS como View engine
app.set('view engine','ejs') 
//Define diretório para arquivos estaticos(css, imagens, js(front-end))
app.use(express.static('public')) 
consign() 
 .include('/controllers/rotas') 
 .into(app) 
app.get(`/`, async (req, res)=>{ 
 try { 
 dados = await requests.obterPets(`pets`) 
 res.status(200) 
 res.render('index', {dados:dados}) 
 } catch (error) { 
 console.log(error) 
 res.status(400) 
 res.render('index') 
 } 
}) 
app.listen(porta, ()=>console.log(`Servidor rodando em: 
http://localhost:${porta}`)) 