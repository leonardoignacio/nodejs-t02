const axios = require('axios')
module.exports={
    obterPets: async (rota)=>{

        let uri = `${urlServer}/${rota}`
        let dados = await axios.get(uri)
        return [...dados.data]
    },
    realizarLogin: async (req, rota)=>{
            let uri = `${urlServer}/${rota}`
            let resp = await axios.post(uri, {...req.body})
            return resp.data
    },
    gravarCookie:(res, token)=>{
        res.cookie('Authorization', token, {
            //httpOnly: true,
            secure: true,
            sameSite: 'strict',
            //expires: new Date(Date.now() + 60 * 60 * 1000), //+1 hora com data/hra definida
            maxAge: 60 * 60 * 1000 //+1 hora em milesegundos
        })

    },
    excluirCookie:(res)=>{
        //res.cookie('Authorization', 'undefined', {maxAge: 60 * 60 * 100000})
        res.cookie('Authorization', 'undefined', { expires: new Date(0) })

    }
}
