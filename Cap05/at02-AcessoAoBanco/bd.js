const mysql = require('mysql2')
//Conexão com o banco de dados
module.exports = ()=> {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'amigo_do_pet'  
    });
    console.log('Conetado ao banco')
    return connection
}
