import mysql from 'mysql2'

const conexao = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user : "root",
    password : "root",
    database: "bd_copa"
})

conexao.connect()

export const consulta = (sql, valores="", mensagemReject) => {
    return new Promise((resolve, reject) => {
      conexao.query(sql, valores, (erro, resultado) => {
        if (erro) return reject(mensagemReject);
        // fazer o parse dos dados
        const row = JSON.parse(JSON.stringify(resultado));

        return resolve(row);
      });
    });
}

export default conexao
