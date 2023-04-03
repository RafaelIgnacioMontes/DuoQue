const Router = require('express').Router()
const controller = require('../controllers/ProfileInfoController')

Router.get('/info/:summoner_id', controller.ProfileInfoByUser)

Router.post('/create/info/:summoner_id', controller.NewInfo)

Router.get('/all', controller.AllProfileInfo)

module.exports = Router
