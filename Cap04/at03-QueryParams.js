var app = require('express')()
var porta = '3200'
app.get('/',(req, res)=>{
    //Acessa o Query Parameter na URL da requisição, caso exista
    if (req.query['nome']){ 
        let nome =req.query['nome']
        res.send(`<h1>Olá ${nome}, seja bem vindo!</h1>`)
    }
    else{
        res.send(`<h1>Informe seu nome</h1>
                  <form method="GET">
                    <label for="nome">Nome:</label>
                    <input type="text" name="nome" placeholder="Informe seu nome" />
                    <input type="submit" value="Enviar" />
                   </form>`)
    }
})
app.listen(porta, ()=>console.log(`Servidor rodando em: http://localhost:${porta}`))
