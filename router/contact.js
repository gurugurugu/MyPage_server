const express = require('express')
const router = express.Router()
const contactinfo_handler = require('../router_handler/contactinfo')
router.post('/contactinfo', contactinfo_handler.sendmessage)

router.get('/contactinfo', contactinfo_handler.getrequestmessage)

module.exports = router