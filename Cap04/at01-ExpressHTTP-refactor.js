const app = require('express')()
var porta = '3200'
app.get('/', (req, res)=>res.send('<h1>Tela Inicial</h1>'))
app.get('/cadastro', (req, res)=>res.send('<h1>Tela de cadastro</h1>'))
app.get('/usuario', (req, res)=>res.send('<h1>Tela de usuário</h1>'))
app.get('/consulta', (req, res)=>res.send('<h1>Tela de consulta</h1>'))
app.listen(porta, ()=>console.log(`Servidor rodando em: http://localhost:${porta}`))

