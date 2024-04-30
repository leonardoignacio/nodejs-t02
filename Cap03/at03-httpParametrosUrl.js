const http = require('http')
const url = require('url')
const server = http.createServer((req, res)=>{
    //Converte parâmetros passados na url
    let parametro = url.parse(req.url, true)
    let nome = parametro.query.nome
    res.statusCode=200
    res.setHeader('Contenty-Type', 'text/html')
    if (nome){
        res.end(`
            <head> <meta charset="UTF-8"></head>
            <body>
                <h1>Olá ${nome}!!!</h1>
            </body>
        `)
    } else {   
        res.end(`
        <head> <meta charset="UTF-8"></head>
        <body>
            <h1>Olá Node.js!!!</h1>
        <body>
        `)
    }    
})
server.listen('3200', ()=>{console.log('Servidor rodando...')})