const path =require('path')
let arquivo='./Capitulo 02 - Módulos e NPM.pdf'

console.log('Extensão: ', path.extname(arquivo))
console.log('nome completo: ', path.basename(arquivo))
console.log('Unidade Base: ', path.dirname(arquivo))
console.log('Caminho Absoluto: ', path.resolve(arquivo)) 
