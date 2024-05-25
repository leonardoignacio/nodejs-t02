const { DataTypes, Model } = require('sequelize')
const sequelize = require('../bdConexao')
class Usuario extends Model{}
Usuario.init({
      nome: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      cpf: {
        type: DataTypes.STRING(14),
        allowNull:false
      },
      telefone: {
        type: DataTypes.STRING(11),
        allowNull:true
      },
      whatsapp: {
        type: DataTypes.STRING(11),
        allowNull:true
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull:false
      },
      senha: {
        type: DataTypes.STRING,
        allowNull:false
      }
},{
    sequelize,
    modelName:'usuario'
  }
)
sequelize.sync()
 module.exports = Usuario   

/*

{
    "nome":"José",
    "cpf": "781.222.44-30",
    "telefone":"17997826667",
    "whatsapp":"551799996666",
    "email":"josé@teste.com",
    "senha":"1247"
}

*/