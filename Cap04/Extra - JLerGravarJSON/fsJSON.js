const fs = require('fs')
module.exports = {
     lerJSON: (arquivo)=>{
        //Lê arquivos de texto de forma síncrona
        let json = fs.readFileSync(arquivo, 'utf8')
        return json
    },
     converterJSON_Obj: (json)=>{
        //Converte string JSON para um objeto javaScript
        let dados = JSON.parse(json)
        return dados
    },
     converterObj_JSON:(dados)=>{
        //Converte objeto javaScrip para uma string JSON
        let json = JSON.stringify(dados)
        return json
    },
     salvarJSON:(json, arquivo)=>{
        //Grava arquivos de texto de forma síncrona
        fs.writeFileSync(arquivo, json)
    }
}