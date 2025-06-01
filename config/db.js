const Mysql = require('mysql2/promise');

const db = Mysql.createPool({   
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'students_db',

});

module.exports = db; // Exporting the pool as a promise for async/await usage