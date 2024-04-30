//Importação do modulo "os"
const os = require('os')
console.log('Processador(es): ', os.cpus())
console.log('Qtde memória livre: ', os.freemem())
console.log('Diretório do usuário: ', os.homedir())
console.log('Familia de S.O.: ', os.type())
//Lista todas as variáveis de ambiente
console.log(process.env) 
