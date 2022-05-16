const express = require('express')
const router = express.Router()
const AuthController = require('../controller/authController')
const verify = require('../routes/authVerify')
const cors = require('cors')

// ADIMN AUTHENTICATION
router.post('/signup', cors(), AuthController.signUp)
router.post('/signin', cors(), AuthController.signIn)
router.get('/getAllUsers', cors(), verify, AuthController.getAllUsers)
//router.get('/getUserDetail/:id', cors(), AuthController.getParticularUser)

module.exports = router
