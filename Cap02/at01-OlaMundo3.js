/*
    Realizar entradas no console de maneira sincrona (mais parecido com o paradgma procedural).
    Instalar o modulo prompt-sync para obter entradas de console de forma sincrona
    Objetivos:
        - Facilitar o código utilizando modulos e bibliotecas;
        - Instalar um modulo por meio do NPM;
        - Importar e utilizar um modulo;

    Comandos utilzados:
        Comando: npm install prompt-sync -g
		 npm link prompt-sync
*/
//prompt-sync - modulo que recebe entradas de console de modo assíncrono
let prompt = require('prompt-sync')
prompt = prompt({sigint:true})
console.log('Olá Mundo!\r\n')
// var e let são argumentos para declarar variáveis
let nome = prompt('Qual é seu nome? ') //prompt.toString()
console.log(`Olá ${nome}!\r\n`)
console.log('Olá node!')




