const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'ddd40702',
    database: 'mypage',
})


module.exports = db