/*
    Criar variáveis de ambiente acessíveis em toda a aplicação
 */
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const port = process.env.PORT || '3000'
const secretKey = process.env.SECRET_KEY
const dbURL = process.env.DB_URL
console.log(port)
console.log(secretKey)
console.log(dbURL)