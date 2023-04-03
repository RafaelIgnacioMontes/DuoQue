const Router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/FriendListController')

Router.post(
  '/addFriend/:summoner_id/friend/:friend_id',
  middleware.stripToken,
  middleware.stripToken,
  controller.addFriend
)
Router.delete(
  '/delete/:friendList_id',
  middleware.stripToken,
  middleware.stripToken,
  controller.deleteFriend
)

Router.get('/all/:summonerId', controller.getAllLists)

module.exports = Router
