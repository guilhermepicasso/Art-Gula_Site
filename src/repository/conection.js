import mysql from 'mysql2/promise';


let con;

try {
    con = await mysql.createConnection({
        host: '',
        user: '',
        password: '',
        database: '',
        ssl: {
            // Configurações SSL
            rejectUnauthorized: true // Rejeitar conexões de servidores não autorizados
            // Outras opções SSL, se necessário
        }
    })

    console.log('Conexão com BD realizada');
} catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error.message);
}

export default con;