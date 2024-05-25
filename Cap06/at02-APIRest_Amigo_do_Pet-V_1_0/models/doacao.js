const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('../bdConexao')
const usuario = new require('./usuario')
const pet = new require('./pet')
class Doacao extends Model{}

Doacao.init({
    data_interesse: {
        type:Sequelize.DATEONLY,
        defaultValue: DataTypes.NOW
      },
      data_doacao:{
        type:Sequelize.DATEONLY,
        allowNull: true
      },
      status: {
        type: DataTypes.STRING,
        defaultValue:"Cadastrada"
      }
    },{
      sequelize,
      modelName:'doacoes'
    }
  )
  
  pet.hasMany(Doacao) //Muitos Pets tem muitas Doações - M-p-M
  Doacao.belongsTo(pet)

  usuario.hasMany(Doacao)
  Doacao.belongsTo(usuario)
  sequelize.sync()
   module.exports = Doacao


    //https://sequelize.org/docs/v6/core-concepts/model-basics/
   //https://sequelize.org/docs/v6/advanced-association-concepts/creating-with-associations/

//hasOne (tem um) 1 para 1
//belongsTo (pertence a) 1 para 1
//hasMany (tem muitos) 1 para N
//belongsToMany (pertence a muitos) N para N


/*
    {
      "data_interesse":"2022-10-19",
      "data_doacao":"2022-10-19",
      "usuarioId":2,
      "petId":1
    }

*/