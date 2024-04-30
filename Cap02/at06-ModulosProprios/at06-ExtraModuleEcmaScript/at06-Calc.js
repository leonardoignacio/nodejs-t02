/*
    Paa utilizar módulos ES6 (ECMAScript) 
     ao invez de módulos CommonJS
    Configurar package.json com a entrada
      "type": "module",

*/
import calculadora from './calculadora.js'
const {soma, sub, mult, div} = calculadora
console.log(soma(8,15))
console.log(sub(30,15))
console.log(mult(8,6))
console.log(div(100,4))
console.log(div(100,0))
