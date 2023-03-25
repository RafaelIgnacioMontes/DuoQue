const Router = require('express').Router()
const controller = require('../controllers/AuthController')

Router.post('/register', controller.Register)
Router.post('/login', controller.Login)

module.exports = Router
