const { ProfileInfo, Summoner } = require('../models')

const AllProfileInfo = async (req, res) => {
  const response = await ProfileInfo.findAll()
  res.send(response)
}

const ProfileInfoByUser = async (req, res) => {
  const summonerId = req.params.summoner_id

  const response = await ProfileInfo.findOne({
    where: { summonerId: summonerId }
  })
  res.send(response)
}

const NewInfo = async (req, res) => {
  const summonerId = req.params.summoner_id
  let profileBody = {
    summonerId,
    ...req.body
  }
  const response = await ProfileInfo.create(profileBody)
  res.send(response)
}

module.exports = {
  ProfileInfoByUser,
  NewInfo,
  AllProfileInfo
}
