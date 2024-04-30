const http = require('http')
const url = require('url')
const fs = require('fs')
const porta = 3200

const server = http.createServer((req, res)=>{
    const q= url.parse(req.url, true)
    //Pega a substring após a "/"
    let pagina = q.pathname.substring(1)
    //Aponta url inicial para o index.html
    pagina = pagina==''? 'index.html':pagina
    //Insere a extensão HTML caso não for especificado
    pagina = !pagina.includes('html')? pagina=pagina+'.html': pagina
    console.log(pagina)
       
    if (fs.existsSync(pagina)){ //Verifica o arquivo existe
        fs.readFile(pagina, function(err, data){
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            return res.end()
        })    
    } else {
        fs.readFile('404.html', function(err, data){
            res.writeHead(404, {'Content-Type':'text/html'})
            res.write(data)
            return res.end()
        })    
    }
})
server.listen(porta, ()=>{
    console.log('Servidor rodando em: http://localhost:'+porta)
})
