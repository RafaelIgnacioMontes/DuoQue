const { Summoner } = require('../models')
const axios = require('axios')
const API_KEY = process.env.API_KEY

const GetSummoner = async (req, res) => {
  try {
    const { summonerName } = req.params
    const response = await axios.get(
      `https:na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`
    )

    res.send(response.data)
  } catch (error) {
    throw error
  }
}

const GetSummonerInfoOnSignUpAndUpdateSummoner = async (req, res) => {
  try {
    const { summonerName } = req.params
    const response = await axios.get(
      `https:na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`
    )

    if (response !== false) {
      let summonerId = req.params.summoner_id
      let updateSummoner = await Summoner.update(
        {
          puuid: response.data.puuid,
          profileIconId: response.data.profileIconId,
          summonerLevel: response.data.summonerLevel,
          accountId: response.data.accountId
        },
        {
          where: {
            id: summonerId
          },
          returning: true
        }
      )
      res.send(updateSummoner)
    }
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetSummonerInfoOnSignUpAndUpdateSummoner,
  GetSummoner
}
