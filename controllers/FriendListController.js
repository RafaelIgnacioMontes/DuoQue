const { FriendList, Summoner } = require('../models')

const addFriend = async (req, res) => {
  try {
    const summonerId = +req.params.summoner_id
    const friendId = +req.params.friend_id
    const adding = await FriendList.create({
      summonerId: +summonerId,
      friendId: +friendId
    })
    res.send(adding)
  } catch (error) {
    throw error
  }
}

const deleteFriend = async (req, res) => {
  try {
    const friendListId = req.params.friendList_id
    await FriendList.destroy({
      where: { id: friendListId }
    })
    res.send({
      message: `Friend list with id of ${friendListId} has been deleted`
    })
  } catch (error) {
    throw error
  }
}

const getAllLists = async (req, res) => {
  try {
    const response = await FriendList.findAll({
      where: { summonerId: req.params.summoner_id }
    })
    res.send(response[0])
  } catch (error) {
    throw error
  }
}

module.exports = {
  addFriend,
  deleteFriend,
  getAllLists
}
