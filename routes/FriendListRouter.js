const Router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/FriendListController')

Router.post(
  '/add',
  middleware.stripToken,
  middleware.verifyToken,
  controller.AssignFriend
)

module.exports = Router
