//import express
const express = require('express')
// create an server
const app = express()
//import cors middleware
const cors = require('cors')
//
const joi = require('joi')

const port = process.env.PORT || 5000



app.use(cors())

app.use(express.urlencoded({ extended: false}))

app.use(express.json())

app.use((req, res, next)=>{
    //status default equal to 1
    //err, can be an err object or err string
    res.cc = function(err, status=1){
        res.send({
            status,
            message:err instanceof Error ? err.message: err,
        })
    }
    next()

})


const serviceRouter = require('./router/serviceinfo')

app.use('/db', serviceRouter)

const contactRouter = require('./router/contact')

app.use('/db', contactRouter)

app.listen(port, ()=>{
    console.log(`app sever running at ${port}`)
})