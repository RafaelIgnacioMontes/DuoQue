const { Summoner, FriendList } = require('../models')
const middleware = require('../middleware')

const Register = async (req, res) => {
  try {
    const { email, password, summonerName } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const summoner = await Summoner.create({
      summonerName,
      email,
      passwordDigest
    })
    res.send(summoner)
  } catch (error) {
    throw error
  }
}

const Login = async (req, res) => {
  try {
    const { email, password } = req.body
    const summoner = await Summoner.findOne({
      where: { email: email },
      raw: true
    })
    let matched = await middleware.comparePassword(
      summoner.passwordDigest,
      password
    )
    if (matched) {
      let payload = {
        id: summoner.id,
        email: summoner.email,
        puuid: summoner.puuid,
        accountId: summoner.accountId,
        summonerLevel: summoner.summonerLevel,
        summonerName: summoner.summonerName,
        matchHistoryId: summoner.matchHistoryId,
        profileIconId: summoner.profileIconId,
        summonerId: summoner.summonerId,
        tier: summoner.tier,
        rank: summoner.rank,
        leaguePoints: summoner.leaguePoints,
        wins: summoner.wins,
        losses: summoner.losses,
        hotStreak: summoner.hotStreak
      }
      let token = middleware.createToken(payload)
      return res.send({ summoner: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Incorrect Password' })
  } catch (error) {
    console.log(error)
    res
      .status(401)
      .send({ status: 'Error', msg: 'An error has occurred on login!' })
  }
}

const ChangePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const summoner = await Summoner.findByPk(req.params.summoner_id)
    let matched = await middleware.comparePassword(
      summoner.passwordDigest,
      oldPassword
    )
    if (matched) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      await summoner.update({ passwordDigest })
      let payload = {
        summonerName: summoner.summonerName,
        id: summoner.id,
        email: summoner.email
      }
      return res.send({ status: 'Password Updated!', summoner: payload })
    }
    res
      .status(401)
      .send({ status: 'Error', msg: 'Old Password did not match!' })
  } catch (error) {
    console.log(error)
    res
      .status(401)
      .send({ status: 'Error', msg: 'An error occured updating password' })
  }
}
const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  ChangePassword,
  CheckSession
}
