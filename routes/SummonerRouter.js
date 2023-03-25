const Router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/SummonerRouter')

Router.get(
  '/all',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getAllSummoners
)

Router.get(
  '/:summoner_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getSummonerbyId
)

Router.put(
  '/update/:summoner_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateFriendId
)

module.exports = Router
