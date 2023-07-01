const express = require('express')
const controller = require( '../controllers/app.controller.js')

const router = express.Router()

router.post('/user/testsms', controller.sendSMS)

module.exports = { router }