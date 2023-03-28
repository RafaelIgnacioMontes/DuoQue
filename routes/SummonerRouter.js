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

Router.get(
  '/FL',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getFriendList
)
Router.delete('/delete/:summoner_id', controller.deleteSummoner)

module.exports = Router
