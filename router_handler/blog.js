const db = require('../db/index')

exports.saveimage =(req, res)=>{

    var data = {
        image:req.file.filename,
        title:req.body.title,
        content:req.body.content
    }


    const sql  = `insert into blog set ?`
    db.query(sql, [data], function(err, results){
        if(err) return res.cc(err)

        res.cc('save image sucessfully',0)


    })

}



exports.blog =(req, res) =>{

    
    const bloginfo = req.body

    const sqlStr = `select * from blog`
    db.query(sqlStr, bloginfo.id, (err, results)=>{
        if(err) return res.cc(err)
        
        res.json(results)
        

    })

}