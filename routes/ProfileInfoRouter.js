const Router = require('express').Router()
const controller = require('../controllers/ProfileInfoController')
const middleware = require('../middleware')

Router.get('/info/:summoner_id', controller.ProfileInfoByUser)

Router.post('/create/info/:summoner_id', controller.NewInfo)

Router.get('/all', controller.AllProfileInfo)

Router.put(
  '/update/:profileInfo_id/user/:summoner_id',
  controller.updateProfileInfo,
  middleware.stripToken,
  middleware.verifyToken
)

module.exports = Router
