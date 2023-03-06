const express = require('express')
const router = express.Router()

const serviceinfo_handler = require('../router_handler/serviceinfo')

router.post('/serviceinfo', serviceinfo_handler.finishes)


module.exports = router