/*
    Modulo url recupera dados passados na string de uma url
*/
const url = require('url')
let uri = 'https://www.google.com/search?q=node+js&rlz=1C1BNSD_pt-BRBR946BR946'
let partUrl = new url.URL(uri)
console.log('Domínio: ', partUrl.host)
console.log('Caminho ou Rota: ', partUrl.pathname)
console.log('Query String: ', partUrl.search)
console.log('Apenas parâmetro: ', partUrl.searchParams)
console.log('Valor do parâmetro q: ', partUrl.searchParams.get('q'))
console.log('Valor do parâmetro rlz: ', partUrl.searchParams.get('rlz'))
console.log(partUrl)
