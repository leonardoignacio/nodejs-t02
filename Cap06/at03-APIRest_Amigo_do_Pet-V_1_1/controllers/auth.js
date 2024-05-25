const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const jwtSecret ='klsdfjlsd34593DFLKGDFdfgdf6767fgfg56g'
const model = new require('../../models/usuario')
module.exports = {
    criptografarSenha: async(senha)=>{
        const salt = bcrypt.genSaltSync(12)
        return bcrypt.hashSync(senha, salt)
    },
    //https://www.base64decode.org/
    gerarToken: async(usuario)=> await jwt.sign(usuario, jwtSecret, {expiresIn:'1h'}),
    
    //Compara o hash da senha enviada na requisição com o hash da senha do banco
    validarSenha: async(senha, hashSenha)=> await bcrypt.compare(senha, hashSenha),
    validarToken:(req, res, next)=>{
        try {
            let token = req.headers.authorization
            token = token.split(' ');
            token = token[1]
            jwt.verify(token, jwtSecret, (erro, dados)=>{//Verifica a validade do token
            if (erro){
                res.json({message:'Token inválido!', error:erro }).status(400)
            } else {
                req.token = token //Insere o token na requisição
                req.usuarioAtual = {...dados} //Insere os dados do usuario atual na requisição
                next() //CallBack que executa a proxima função(no caso a rota protegida)
            }
        })
        } catch (erro) {
            res.json({message:'Não existe token na requisição.'}).status(400)
        }
    }
}