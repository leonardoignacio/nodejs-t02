module.exports =(app)=>{ 
    app.get(`/login`, async (req, res)=>{ 
    res.render('login') 
    }) 
   } 
   