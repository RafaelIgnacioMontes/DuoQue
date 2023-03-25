const { FriendList } = require('../models')

const GetAllSummonerFriendsById = async (req, res) => {
  try {
    summonerId = req.params.id
    const friends = FriendList.FindAll({ where: { listOwnerId: summonerId } })
    res.send(friends)
  } catch (error) {
    throw error
  }
}

const AssignFriend = async (req, res) => {
  try {
    const { listOwnerId, friendId } = req.body
    const addFriend = await FriendList.create({
      listOwnerId: +listOwnerId,
      friendId: +friendId
    })
    res.send(addFriend)
  } catch (error) {
    throw error
  }
}


module.exports = {
  GetAllSummonerFriendsById,
  AssignFriend
}
