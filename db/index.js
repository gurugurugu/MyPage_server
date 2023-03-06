const mysql = require('mysql')

const db = mysql.createPool({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12603428',
    password: 'xlEMtaTN4p',
    database: 'sql12603428',
})


module.exports = db