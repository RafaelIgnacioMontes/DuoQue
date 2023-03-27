const Router = require('express').Router()
const PostsRouter = require('./PostsRouter')
const SummonerRouter = require('./SummonerRouter')
const CommentRouter = require('./CommentRouter')
const FriendListRouter = require('./FriendListRouter')
const AuthRouter = require('./AuthRouter')
const RIOTRouter = require('./RIOTRouter')

Router.use('/posts', PostsRouter)
Router.use('/comment', CommentRouter)
Router.use('/friendlist', FriendListRouter)
Router.use('/auth', AuthRouter)
Router.use('/summoner', SummonerRouter)
Router.use('/riot', RIOTRouter)

module.exports = Router
