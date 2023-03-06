const db = require('../db/index')


exports.finishes =(req, res) =>{

    
    const serviceinfo = req.body

    const sqlStr = `select * from servicefinishes`
    db.query(sqlStr, serviceinfo.id, (err, results)=>{
        if(err) return res.cc(err)

        res.json(results)
        

    })

}