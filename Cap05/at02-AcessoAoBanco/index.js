const express = require('express')
const app = express()
const con = require('./bd')();
const path = require('path')
const baseDir=path.join(__dirname, 'templates')
var porta = '3200'
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req, res)=>res.sendFile(`${baseDir}/index.html`))
app.get('/cadastrar', (req, res)=>res.sendFile(`${baseDir}/cadastrar.html`))

app.post('/cadastrar/pets', async (req, res)=>{
    
    let dados = Object.values(req.body).map((val)=>val)    
    //Salvar dados
    const sql = "INSERT INTO pets (nome, especie, idade_aproximada, porte, cor_predominante, cor_secundaria) VALUES (?,?,?, ?, ?, ?);";
    try {
       con.query(sql, dados, (erro, resp)=>{
            let resposta
            if(erro) resposta = {...erro, status:400, message: `Os dados não foram gravados`}
            else resposta = {...resp, status:200, message: `Sucesso: ${resp.affectedRows} linha(s) alterada(s)`}
            res.json(resposta).status(200)
        })       
    } catch (erro) {
        res.send('Erro ao acessar o banco: '+erro).status(400);
    }
})
app.get('/consultar/pets', (req, res)=>{
    //ler dados
    const sql = 'SELECT * FROM pets';
    try {
        con.query(sql, (erro, dados)=>{
            if(erro) resposta = {...erro, status:400, message: `Os dados não foram gravados`}
            else resposta = {...dados, status:200, message: `Sucesso!`}
            res.json(resposta).status(200)
        });
    } catch (erro) {
        res.send('Erro ao acessar o banco: '+erro).status(400);
    }    
})

app.get('/consultar/pets/:id', (req, res)=>{
    //ler dados
    const sql = `SELECT * FROM pets WHERE id = ${req.params.id}`
    try {
        con.query(sql, (erro, dados)=>{
            console.log(erro? ('Erro: '+erro) : 'Sucesso!')
            res.json(dados).status(200)
        });
    } catch (erro) {
        res.send('O registro não pode ser gravado. '+erro).status(400)
    }    
})
app.put('/editar/pets/:id', (req, res)=>{
    //Atualizar dados
    let dados = Object.values(req.body).map((val)=>val)
    const sql = `UPDATE pets SET nome=?, especie=?, idade_aproximada=?, porte=?, cor_predominante=?, cor_secundaria=?  WHERE id = ${req.params.id}`
    try {
        con.query(sql, dados, (erro, resp)=>{
            let resposta
            if(erro) resposta = {...erro, status:400, message: `Os dados não foram gravados`}
            else resposta = {...resp, status:200, message: `Sucesso: ${resp.affectedRows} linha(s) alterada(s)`}
            res.json(resposta).status(200)
        });
    } catch (erro) {
        res.send('O registro não pode ser gravado. '+erro).status(400)
    }    
})

app.delete('/excluir/pets/:id', (req, res)=>{
    //ler dados
    const sql = `DELETE FROM pets WHERE id =${req.params.id}`
    try {
        con.query(sql, (erro, resp)=>{
            let resposta
            if(erro) resposta = {...erro, status:400, message: `Os dados não foram excluídos`}
            else resposta = {...resp, status:200, message: `Sucesso: ${resp.affectedRows} linha(s) alterada(s)`}
            res.json(resposta).status(200)
        })
    } catch (erro) {
        res.send('O registro não pode ser gravado. '+erro).status(400)
    }    
})

app.listen(porta, ()=>console.log(`Servidor rodando em: http://localhost:${porta}`))