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
    const summoner = await Summoner.findByPk(summonerId, {
      where: { id: summonerId }
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

const getFriendList = async (req, res) => {
  try {
    let summonerId = +req.params.summoner_id
    await Summoner.findByPk(summonerId, {
      include: {
        model: Summoner,
        as: 'friend',
        through: {
          attributes: []
        }
      }
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllSummoners,
  getSummonerbyId,
  deleteSummoner,
  getFriendList
}
