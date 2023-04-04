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
    await FriendList.destroy({
      where: {
        summonerId: req.params.summoner_id,
        friendId: req.params.friend_id
      }
    })
    res.send({
      message: `Friend has been deleted`
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
