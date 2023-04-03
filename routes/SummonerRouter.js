const Router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/SummonerController')

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
  '/FL/:summoner_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getFriendListOfOwner
)
Router.delete('/delete/:summoner_id', controller.deleteSummoner)

Router.get('/summoner/:summonerName', controller.getBySummonerName)

module.exports = Router
