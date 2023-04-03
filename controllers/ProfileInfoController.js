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
  const summonerId = +req.params.summoner_id
  let profileBody = {
    summonerId,
    ...req.body
  }
  const response = await ProfileInfo.create(profileBody)
  res.send(response)
}
const updateProfileInfo = async (req, res) => {
  try {
    let profileInfoId = parseInt(req.params.profileInfo_id)
    let summonerId = parseInt(req.params.summoner_id)
    let profileBody = {
      summonerId,
      ...req.body
    }
    const response = await ProfileInfo.update(profileBody, {
      where: { id: profileInfoId },
      returning: true
    })
    res.send(response[1][0])
  } catch (error) {
    throw error
  }
}

module.exports = {
  ProfileInfoByUser,
  NewInfo,
  AllProfileInfo,
  updateProfileInfo
}
