const { DataTypes, Model } = require('sequelize')
const sequelize = require('../bdConexao')
const usuario = new require('./usuario')
class Pet extends Model{}

Pet.init({
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      sexo: {
        type: DataTypes.STRING(1),
        allowNull:false
      },
      especie: {
        type: DataTypes.STRING(50),
        allowNull:false
      },
      raca: {
        type: DataTypes.STRING(50),
        allowNull:true
      },
      peso: {
        type: DataTypes.INTEGER,
        allowNull:true
      },
      tamanho: {
        type: DataTypes.STRING(10),
        allowNull:false
      },
      idade: {
        type: DataTypes.INTEGER,
        allowNull:true
      },
      doenca: {
        type: DataTypes.STRING,
        allowNull:true
      },
      obs: {
        type: DataTypes.STRING,
        allowNull:true
      }
},{
    sequelize,
    modelName:'pet'
  }
)
usuario.hasMany(Pet) // Usuario tem muitos Pets 1-p-M
Pet.belongsTo(usuario) //Pet pertence a Usuario 1-p-1
sequelize.sync()
 module.exports = Pet  


 //https://sequelize.org/docs/v6/advanced-association-concepts/creating-with-associations/


//hasOne (tem um) 1 para 1
//belongsTo (pertence a) 1 para 1
//hasMany (tem muitos) 1 para N
//belongsToMany (pertence a muitos) N para N


/*
  {
    "nome":"Totó",
    "sexo":"m",
    "especie":"cachorro",
    "raca":"multiplas",
    "peso":9,
    "tamanho":"médio",
    "idade":2,
    "doenca":"nenhuma aparente",
    "obs":"dócil"
  }

*/
