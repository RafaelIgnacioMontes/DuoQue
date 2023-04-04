import { useEffect, useState } from 'react'
import EditProfile from '../components/EditProfile'
import axios from 'axios'
import gold from '../images/tier-icons/gold_iii.png'
import silver from '../images/tier-icons/silver_iii.png'
import bronze from '../images/tier-icons/bronze_iii.png'
import diamond from '../images/tier-icons/diamond_iii.png'
import plat from '../images/tier-icons/platinum_iii.png'
import UpdatProfile from '../components/UpdateProfileInfo'

const ProfilePage = ({ summoner, GetSummonerProfile, summonerProfile }) => {
  const [rankInfo, setRankInfo] = useState({
    tier: '',
    rank: '',
    leaguePoints: '',
    wins: '',
    losses: '',
    hotStreak: ''
  })
  const initialState = {
    preferedRole: '',
    champions: '',
    lookingFor: ''
  }

  const [profileInfo, setProfileInfo] = useState(initialState)
  console.log(summoner)

  const GetRankedInfo = async () => {
    if (summoner != false) {
      const info = await axios.put(
        `http://localhost:3001/server/riot/${summoner.summonerId}/update/rank/${summoner.id}`
      )
      setRankInfo(info.data)
    }
  }
  let tiery
  if (summoner.tier === 'GOLD') {
    tiery = <img src={gold} />
  } else if (summoner.tier === 'SILVER') {
    tiery = <img src={silver} />
  } else if (summoner.tier === 'BRONZE') {
    tiery = <img src={bronze} />
  } else if (summoner.tier === 'DIAMOND') {
    tiery = <img src={diamond} />
  } else if (summoner.tier === 'PLATINUM') {
    tiery = <img src={plat} />
  }

  // const GetRankFromApi = async () => {
  //   const response = await axios.get(
  //     `http://localhost:3001/server/riot/${summoner.summonerName}`
  //   )
  //   const user = response.data
  // }
  let profile
  if (
    profileInfo.preferedRole &&
    profileInfo.champions &&
    profileInfo.lookingFor
  ) {
    profile = (
      <div>
        <EditProfile
          summoner={summoner}
          profileInfo={profileInfo}
          summonerProfile={summonerProfile}
          setProfileInfo={setProfileInfo}
        />
      </div>
    )
  } else {
    profile = (
      <div className="udpate">
        <UpdateProfile
          summoner={summoner}
          summonerProfile={summonerProfile}
          setProfileInfo={setProfileInfo}
        />
      </div>
    )
  }
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
      </div>
      <div className="updateRank">
        <button className="rankbutton" onClick={GetRankedInfo}>
          Update Rank
        </button>
      </div>
      <div className="summonerInfodiv">
        <div className="summonerInfo1">{summoner?.level}</div>
        <div className="summonerInfo2">
          {summoner?.tier}: {summoner?.rank}
        </div>
        <>{tiery}</>
        <div className="summonerInfo4">LP:{summoner?.leaguePoints}</div>
        <div className="summonerInfo5">
          Wins: {summoner?.wins} Losses: {summoner?.losses}
        </div>
        <div className="profileinfogreater1">
          <div className="preferedRole">
            Prefered Role: {summonerProfile?.preferedRole}
          </div>
        </div>
        <div className="profileinfogreater2">
          <div className="champions">
            Champions: {summonerProfile?.champions}
          </div>
        </div>
        <div className="profileinfogreater3">
          <div className="lookingFor">
            Looking For: {summonerProfile?.lookingFor}
          </div>
        </div>
      </div>
      {profile}
    </div>
  )
}

export default ProfilePage
