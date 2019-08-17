const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.post('/signUp', UserController.create)
router.post('/signIn', UserController.signIn)

module.exports = router