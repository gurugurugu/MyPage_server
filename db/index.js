const mysql = require('mysql')

const db = mysql.createPool({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12603428',
    password: 'xlEMtaTN4p',
    database: 'sql12603428',
})

// const db = mysql.createPool({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'ddd40702',
//     database: 'mypage',
// })


module.exports = db