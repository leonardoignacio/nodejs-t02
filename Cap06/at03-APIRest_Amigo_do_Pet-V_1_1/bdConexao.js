const {Sequelize} = require('sequelize')
const sequelize = new Sequelize(
    'amigo_do_pet', 'root', '', {
       host:'localhost',
       dialect:'mysql',
       charset:'utf8',
       collate:'utf8_general_ci',
       timezone:'-03:00'
    }
)
try {
    sequelize.authenticate()
    console.log("Conectado ao banco")
} catch (error) {
    console.log(`Não foi possível conenctar - Erro: ${error}`)
}
module.exports = sequelize
