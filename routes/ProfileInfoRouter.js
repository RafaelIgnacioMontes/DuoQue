const Router = require('express').Router()
const controller = require('../controllers/ProfileInfoController')
const middleware = require('../middleware')

Router.get('/info/:summoner_id', controller.ProfileInfoByUser)

Router.post('/create/info/:summoner_id', controller.NewInfo)

Router.get('/all', controller.AllProfileInfo)

Router.put(
  '/update/user/:summoner_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateProfileInfo
)

Router.delete('/delete/:ProfileInfo_id', controller.deleteProfileInfo)

module.exports = Router
