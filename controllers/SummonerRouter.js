const { Summoner, FriendList } = require('../models')

const getAllSummoners = async (req, res) => {
  try {
    const summoners = await Summoner.findAll()
    res.send(summoners)
  } catch (error) {
    throw error
  }
}

const getSummonerbyId = async (req, res) => {
  try {
    let summonerId = +req.params.summoner_id
    console.log(summonerId)
    const summoner = await Summoner.findByPk(summonerId, {})
    res.send(summoner)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllSummoners,
  getSummonerbyId,
  updateFriendId
}
