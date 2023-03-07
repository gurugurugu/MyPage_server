const express = require('express')
const router = express.Router()
const bloghandler_handler = require('../router_handler/blog')


const multer = require('multer')
const path =require('path')

const storage = multer.diskStorage({
    destination:'./upload/image/',
    filename:(req, file, cb)=>{
        console.log(file)
        return cb(null, `${file.originalname}`)

    }
})


const upload = multer({
    storage: storage
})

router.post('/blog/upload',upload.single('image'),bloghandler_handler.saveimage)
router.post('/blog',bloghandler_handler.blog)


module.exports = router