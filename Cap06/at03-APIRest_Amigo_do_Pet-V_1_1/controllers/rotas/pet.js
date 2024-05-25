const model = new require('../../models/pet')
const rota = 'pets'
module.exports = (app)=> {
    app.get(`/${rota}/:id?`, async (req, res)=>{
        let dados = req.params.id? await model.findOne({where:{id:req.params.id}}) : await model.findAll()
        res.json(dados).status(200)
    })
    app.post(`/${rota}`, async (req, res)=>{
        let dados = req.body
        let respBd = await model.create(dados)
        res.json(respBd).status(200)

    }) 
    app.put(`/${rota}/:id`, async (req, res) => {
            let id = req.params.id
            let dados = req.body
            console.log(dados)
            let respBd = await model.update(dados, {where:{id:id}})
            res.json(respBd)
    })
    app.delete(`/${rota}/:id`, async (req, res) => {
        try {
            let id = req.params.id
            let respBd = await model.destroy({where:{id:id}})
            res.json(respBd)
        } catch (error) {
            res.json(error).status(400)
        }
    })
}
