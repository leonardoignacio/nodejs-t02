
//Objeto de conexão
const chaveAcesso = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'amigo_do_pet'
}
//Função de conexão
const conectar = async () => {
    if (global.statusConexao){
        return global.conexao
    }
    const mysql = require('mysql2/promise')
    const con = await mysql.createConnection(chaveAcesso)
    global.conexao = con
    global.statusConexao=true
    console.log('Conectado ao Banco: ', global.statusConexao)
    return con
}
const obterCampos = async(tabela)=>{
    let con = await conectar()
    try {
        let sql= `DESCRIBE ${tabela}`
        let campos = await con.query(sql)
        return await campos[0]
    } catch (erro) {
        return `${tabela} não encontrada: ${erro}`
    }
}
const executarQuery = async (sql, dados='') => {
    let con = await conectar()
    try {
        let respBd = await con.query(sql, dados)
        respBd= respBd[1]? respBd[0]: respBd
        return await {dados:[...respBd], status:200, message:'Sucesso'}
    } catch (erro) {
        return {status:400, message:'Inconsistência nas informaçãoes: '+erro}
    }
}

module.exports={
    inserir: async (tabela, dados)=>{
        let campos = await obterCampos(tabela)
        //Obter campos do bd
        campos = campos.map((el)=>el.Field)
        campos.shift()
        let argumentos = ''
        campos.forEach(el =>argumentos+=',?')
        argumentos = argumentos.slice(1)
        campos = campos.toString()
        const sql = `INSERT INTO ${tabela} (${campos}) VALUES (${argumentos});`
        //Salvar dados
        return await executarQuery(sql, dados)
    },
    ler: async (tabela, id='') => {
        let sql = id==''? `SELECT * FROM ${tabela}`: `SELECT * FROM ${tabela} WHERE id = ${id};` 
        let linhas = await executarQuery(sql)
        linhas.dados = linhas.dados.length==0? linhas.dados=[{message:'Nenhum registro encontrato'}]:linhas.dados
        return await linhas
    },
    atualizar: async(tabela, dados, id) => {
        let campos = await obterCampos(tabela)
        campos.shift()
        campos = campos.map((el)=>el.Field+'=?')
        campos = campos.toString()
        let sql= `UPDATE ${tabela} SET ${campos} WHERE id =?`
        dados.push(id)
        return await executarQuery(sql, dados)
    },
    deletar: async (tabela, id) => {
        let sql = `DELETE FROM ${tabela} WHERE id = ${id};`
        return await executarQuery(sql)
    }    
}
