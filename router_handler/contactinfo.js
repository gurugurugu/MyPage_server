const db = require('../db/index')


exports.sendmessage =(req, res) =>{
    const contactinfo = req.body
    
    const sql = 'insert into contact set ?'
    db.query(sql, {name: contactinfo.name, email: contactinfo.email, textbox:contactinfo.textbox},(err, results)=>{
        if(err) return res.send({status:1, message: err.message})

        if (results.affectedRows !==1) {
            return res.send({status:1 , message:'send failed plz try later.'})
        }

        res.cc('send message sucessfully',0)

    }
        
        )



}

exports.getrequestmessage =(req, res) =>{

    
    console.log('getok')





}