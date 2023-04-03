import { useEffect, useState } from 'react'
import EditProfile from '../components/EditProfile'
import axios from 'axios'
import tier from '../images/tier-icons/gold_iii.png'

const ProfilePage = ({ summoner, GetSummonerProfile, summonerProfile }) => {
  const [rankInfo, setRankInfo] = useState({
    tier: '',
    rank: '',
    leaguePoints: '',
    wins: '',
    losses: '',
    hotStreak: ''
  })

  console.log(summoner)

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

  useEffect(() => {
    if (summoner != false) {
      GetSummonerProfile()
    }
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
      <div className="profileinfogreater1">
        <div className="preferedRole">
          Prefered Role: {summonerProfile?.preferedRole}
        </div>
      </div>
      <div className="profileinfogreater2">
        <div className="champions">Champions: {summonerProfile?.champions}</div>
      </div>
      <div className="profileinfogreater3">
        <div className="lookingFor">
          Looking For: {summonerProfile?.lookingFor}
        </div>
      </div>
      <EditProfile
        summoner={summoner}
        GetSummonerProfile={GetSummonerProfile}
      />
    </div>
  )
}

export default ProfilePage
