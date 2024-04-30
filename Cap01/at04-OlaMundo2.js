/* 
    Executar o primeiro script "Oá mundo!" e utilizar o modulo interno 'readline' 
    para ler entradas no console.
    Objetivos: 
        - Executar o primeiro script no note.js. 
        - Importar e utilizar um modulo;
        - Observar o comportamento da programação assíncrona; 
    modulo. 
*/

//require faz a importação de um modulo
const readline = require('readline')

console.log('Olá Mundo!!!')
//readline é um módulo com a funcionalidade de receber entradas no console
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question('Qual é seu nome?\n', (nome)=>{
    console.log(`Olá ${nome}`)
})
console.log('Olá node!!!')
