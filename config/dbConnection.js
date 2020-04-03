const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
  host: 'sql9.freemysqlhosting.net',
        user: 'sql9330877',
        password: '3aWMDglC1T',
        database: 'sql9330877'

    });
}