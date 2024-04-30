const http = require('http')

//Cria o serviço HTTP com uma callback que processa e responde as requisições.
const server = http.createServer((req, res)=>{
    
    //Configura o cabeçalho da resposta
    res.setHeader('Contenty-Type', 'text/html')
    
    //Responde a requesição
    res.end(`
    <head> <meta charset="UTF-8"></head>
    <body>
       
        <h1>Olá Mundo!!!</h1>
    </body>
    `)
})

//Ativa o servidor para escutar as requisições
server.listen('3200', ()=>{console.log('Servidor rodando...')})
