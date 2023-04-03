const { Summoner } = require('../models')
const axios = require('axios')
const API_KEY = process.env.API_KEY

const GetSummoner = async (req, res) => {
  try {
    const { summonerName } = req.params
    const response = await axios.get(
      `https:na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`
    )
  } catch (error) {}
}

const GetSummonerInfoOnSignUpAndUpdateSummoner = async (req, res) => {
  try {
    const { summonerName } = req.params
    const response = await axios.get(
      `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`
    )
    console.log(response, 'response here!')
    if (response !== false) {
      let updateSummoner = await Summoner.update(
        {
          puuid: response.data.puuid,
          profileIconId: response.data.profileIconId,
          summonerName: response.data.name,
          summonerLevel: response.data.summonerLevel,
          accountId: response.data.accountId,
          summonerId: response.data.id
        },
        {
          where: {
            id: req.params.summoner_id
          },
          returning: true
        }
      )
      res.send(updateSummoner[1][0])
    }
  } catch (error) {
    throw error
  }
}

const UpdateMoreInfo = async (req, res) => {
  try {
    const { summonerId } = req.params
    const response = await axios.get(
      `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${API_KEY}`
    )
    console.log(response, 'ALDKGHSLFKJDGHS:DNG')
    rank = response.data[0]
    if (response != false) {
      const rankInfo = await Summoner.update(
        {
          tier: rank.tier,
          rank: rank.rank,
          leaguePoints: rank.leaguePoints,
          wins: rank.wins,
          losses: rank.losses,
          hotStreak: rank.hotStreak
        },
        {
          where: { id: req.params.summoner_id },
          returning: true
        }
      )

      res.send(rankInfo[1][0])
    }
  } catch (error) {
    throw error
  }
}

const GetMatches = async (req, res) => {
  try {
    const { puuid } = req.params
    const response = await axios.get(
      `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${API_KEY}`
    )
    console.log(response.data, 'THE DATA')
    res.send(response.data)
  } catch (error) {
    throw error
  }
}

// const GetMatchHistory = async (req, res) => {
//   try {
//     const { puuid } = req.params
//     const response = await axios.get(
//       `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${API_KEY}`
//     )

//     if (response.status === '200' || response.status === 200) {
//       const matchHistory = response.data
//       console.log(matchHistory, 'MATCH HISTORY')
//       const matches = matchHistory.map((match) => {
//         axios.get(
//           `https://americas.api.riotgames.com/lol/match/v5/matches/${match}?api_key=${API_KEY}`
//         )
//       })
//       console.log(matches.data)
//       res.send(matches.data)
//     }
//   } catch (error) {
//     // throw error
//   }
// }

module.exports = {
  GetSummonerInfoOnSignUpAndUpdateSummoner,
  GetSummoner,
  UpdateMoreInfo
}
