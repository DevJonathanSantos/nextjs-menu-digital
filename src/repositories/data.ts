
async function connect() {
    if(global.connection&&global.connection.state!=='disconnected')
    return global.connection;

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host: "server01",
        user: "root",
        password: "joseaa",
        database: "erp_prod"
    });

    global.connection = connection;

    console.log('Conectou no mysql')
    return connection;
}

connect();

async function select(query){
    const conn = await connect();
    return await conn.query(query);
}

module.exports={select}