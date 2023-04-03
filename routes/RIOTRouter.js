const Router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/RIOTController')

Router.get(
  '/:summonerName',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetSummoner
)

Router.put(
  '/:summonerName/update/:summoner_id',

  controller.GetSummonerInfoOnSignUpAndUpdateSummoner
)

Router.put('/:summonerId/update/rank/:summoner_id', controller.UpdateMoreInfo)

// Router.get('/matchhistory/:puuid', controller.GetMatchHistory)

// Router.get('/matches/:puuid', controller.GetMatches)

module.exports = Router
