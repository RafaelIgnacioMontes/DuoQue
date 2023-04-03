import { useEffect, useState } from 'react'
import EditProfile from '../components/EditProfile'
import axios from 'axios'
import tier from '../images/tier-icons/gold_iii.png'

const ProfilePage = ({ summoner }) => {
  const [rankInfo, setRankInfo] = useState({
    tier: '',
    rank: '',
    leaguePoints: '',
    wins: '',
    losses: '',
    hotStreak: ''
  })

  const [summonerProfile, setSummonerProfile] = useState()

  const GetRankedInfo = async () => {
    if (summoner != false) {
      const info = await axios.put(
        `http://localhost:3001/server/riot/${summoner.summonerId}/update/rank/${summoner.id}`
      )
      setRankInfo(info)
    }
  }
  // const GetRankFromApi = async () => {
  //   const response = await axios.get(
  //     `http://localhost:3001/server/riot/${summoner.summonerName}`
  //   )
  //   const user = response.data
  // }

  const GetSummonerProfile = async () => {
    const response = await axios
      .get(`http://localhost:3001/server/profileinfo/info/${summoner.id}`)
      .then((response) => response.data)
      .then((data) => {
        setSummonerProfile(data)
      })
  }
  useEffect(() => {
    GetSummonerProfile()
  }, [])
  return (
    <div className="greaterprofilediv">
      <div>
        <div className="summonernameparent">
          <header className="summonername">{summoner?.summonerName}</header>
        </div>
        <div className="updateRank">
          <button className="rankbutton" onClick={GetRankedInfo}>
            Update Rank
          </button>
        </div>
      </div>
      <div className="summonerInfodiv">
        <div className="summonerInfo1">{summoner?.level}</div>
        <div className="summonerInfo2">
          {summoner?.tier}: {summoner?.rank}
        </div>
        <img src={tier} />
        <div className="summonerInfo4">LP:{summoner?.leaguePoints}</div>
        <div className="summonerInfo5">
          Wins: {summoner?.wins} Losses: {summoner?.losses}
        </div>
      </div>
      <div className="profileinfogreater">
        <div className="prefredRole">{summonerProfile?.preferedRole}</div>
      </div>
      <EditProfile summoner={summoner} />
    </div>
  )
}

export default ProfilePage
