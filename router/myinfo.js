const express = require('express')
const router = express.Router()


router.post('/myinfo', myinfo_handler.resume)


module.exports = router