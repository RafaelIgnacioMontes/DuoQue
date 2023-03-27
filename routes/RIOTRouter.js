const Router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/RIOTController')

Router.get(
  '/:summonerName',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetSummoner
)

Router.get(
  '/:summonerName/update/:summoner_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetSummonerInfoOnSignUpAndUpdateSummoner
)

module.exports = Router
