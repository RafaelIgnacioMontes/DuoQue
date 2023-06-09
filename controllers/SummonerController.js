const { Summoner, ProfileInfo } = require('../models')

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
    const summoner = await Summoner.findByPk(summonerId, {
      where: { id: summonerId },
      include: [
        {
          model: ProfileInfo
        }
      ]
    })
    res.send(summoner)
  } catch (error) {
    throw error
  }
}

const deleteSummoner = async (req, res) => {
  try {
    let summonerId = +req.params.summoner_id
    await Summoner.destroy({
      where: { id: summonerId }
    })
    res.send({ message: `Deleted Summoner with an id of ${summonerId}` })
  } catch (error) {
    throw error
  }
}

const getFriendListOfOwner = async (req, res) => {
  try {
    let summoner_id = req.params.summoner_id
    const friendLists = await Summoner.findByPk(summoner_id, {
      // where: { ownerId: summoner_id },
      include: [
        {
          model: Summoner,
          as: 'friends',
          through: { attributes: [] },
          attributes: ['summonerName', 'summonerLevel', 'rank', 'tier', 'id']
        }
      ]
    })
    res.send(friendLists)
  } catch (error) {
    console.log(error)
    throw error
  }
}

const getBySummonerName = async (req, res) => {
  const response = await Summoner.findAll({
    where: { summonerName: req.params.summonerName },
    include: [
      {
        model: ProfileInfo
      }
    ]
  })
  res.send(response)
}

module.exports = {
  getAllSummoners,
  getSummonerbyId,
  deleteSummoner,
  getFriendListOfOwner,
  getBySummonerName
}
