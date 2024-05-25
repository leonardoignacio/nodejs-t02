const {DataTypes, Model} = require('sequelize')
const sequelize = require('../bdConexao')
class Usuario extends Model{}
Usuario.init({
    nome: {
        type:DataTypes.STRING,
        allowNull:false 
  },
  cpf:{
        type:DataTypes.STRING,
        allowNull:false
  }
}, {
    sequelize,
    modelName:'usuarios' 
})
sequelize.sync()
module.exports = Usuario
