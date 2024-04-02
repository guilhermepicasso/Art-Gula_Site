import mysql from 'mysql2/promise';


let con;

try {
    con = await mysql.createConnection({
        host: 'bd-desen-web.mysql.database.azure.com',
        user: 'agg',
        password: '1a2b3cABC',
        database: 'artgula',
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