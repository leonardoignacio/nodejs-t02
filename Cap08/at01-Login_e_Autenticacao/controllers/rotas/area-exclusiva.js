module.exports =(app)=>{    
    app.get('/area-exclusiva', (req, res)=>{
        //Resgata o token à partir do cookie
        const token = req.headers.cookie.split('=')[1];
        if (token!==undefined){
            dados.autenticado=true
            dados.token=token
            res.render('area_exclusiva', {dados})
        }  
    })
}
