const mysql = require('mysql')

const db = mysql.createPool({
    host: 'aws.connect.psdb.cloud',
    user: '9wrdj94rf4t0ijkv5jxq',
    password: 'pscale_pw_iboBxQHPdaBUyRuF0eKjZq0mMtSLmyxBkaAr0qhLZLD',
    database: 'mypage',
    ssl:{"rejectUnauthorized":true}
})

// const db = mysql.createPool({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'ddd40702',
//     database: 'mypage',
// })


module.exports = db
