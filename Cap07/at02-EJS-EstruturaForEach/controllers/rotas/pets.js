module.exports =(app)=>{
    app.get(`/pets`, async (req, res)=>{
        //Vetor de objetos com dados de exemplo a serem renderizados na view
        let pets=[
            {nome:'Totó', especie:'cachorro', idade:3},
            {nome:'Feliz', especie:'gato', idade:2},
            {nome:'Betoven', especie:'cachorro', idade:1},
            {nome:'Branquinha', especie:'gato', idade:4}    
        ]
        res.render('pets', {pets:pets})
    })
}