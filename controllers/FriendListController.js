const { FriendList, Summoner } = require('../models')

const addFriend = async (req, res) => {
  try {
    const { friendId } = req.body
    const summonerId = req.params.summoner_id
    const adding = await FriendList.create({
      friendId: +friendId,
      summonerId: +summonerId
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
    const response = await FriendList.findAll()
    res.send(response)
  } catch (error) {
    throw error
  }
}

module.exports = {
  addFriend,
  deleteFriend,
  getAllLists
}
