import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Client from './services/api'
import axios from 'axios'
import Home from './pages/Home'
import Nav from './components/Nav'
import './App.css'
import ProfilePage from './pages/ProfilePage'
import UpdateProfile from './components/UpdateProfileInfo'
import EditProfile from './components/EditProfile'
import FriendList from './components/FriendList'

const App = () => {
  const [summoner, setSummoner] = useState(null)

  const [extendedSummonerInfo, setExtendedSummonerInfo] = useState({
    puuid: '',
    profileIconId: '',
    summonerName: '',
    summonerLevel: '',
    accountId: ''
  })

  const [summonerProfile, setSummonerProfile] = useState({
    summonerId: '',
    preferedRole: '',
    champions: '',
    lookingFor: ''
  })

  const handleLogOut = () => {
    setSummoner(null)

    localStorage.clear('token', 'summonerId')
  }

  const checkToken = async () => {
    const summoner = await CheckSession()
    setSummoner(summoner)
  }

  const GetNewSummonerInfo = async (payload) => {
    if (payload) {
      const info = await axios.put(
        `http://localhost:3001/server/riot/${payload.summonerName}/update/${payload.id}`
      )
      setExtendedSummonerInfo(info)
    }
  }
  const GetSummonerProfile = async () => {
    const response = await axios.get(
      `http://localhost:3001/server/profileinfo/info/${summoner.id}`
    )

    setSummonerProfile(response.data)
  }
  const [friendList, setFriendList] = useState([])

  const getFriends = async () => {
    let summonerId = localStorage.getItem('summonerId')
    let response = await Client.get(
      `http://localhost:3001/server/summoner/FL/${summonerId}`
    )

    setFriendList(response.data.friends)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
      getFriends()
    }
  }, [])

  return (
    <div>
      <Nav summoner={summoner} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <SignIn
                setSummoner={setSummoner}
                GetNewSummonerInfo={GetNewSummonerInfo}
                summoner={summoner}
              />
            }
          />
          <Route path="/SignUp" element={<SignUp />} />
          <Route
            path="/ProfilePage"
            element={
              <ProfilePage
                summoner={summoner}
                GetNewSummonerInfo={GetNewSummonerInfo}
                GetSummonerProfile={GetSummonerProfile}
                summonerProfile={summonerProfile}
              />
            }
          />

          <Route
            element={<UpdateProfile GetSummonerProfile={GetSummonerProfile} />}
          />
          <Route
            element={<EditProfile GetNewSummoneProfile={GetSummonerProfile} />}
          />
          <Route
            path="/Home"
            element={<Home summoner={summoner} friendList={friendList} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
