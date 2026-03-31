import mysql from 'mysql2'

const conexao = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

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
