import { Routes, Route } from 'react-router-dom'
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

const App = () => {
  const [summoner, setSummoner] = useState([])

  const [extendedSummonerInfo, setExtendedSummonerInfo] = useState({
    puuid: '',
    profileIconId: '',
    summonerName: '',
    summonerLevel: '',
    accountId: ''
  })

  const [summonerProfile, setSummonerProfile] = useState()

  const handleLogOut = () => {
    setSummoner(null)

    localStorage.clear()
  }

  const checkToken = async () => {
    const summoner = await CheckSession()
    setSummoner(summoner)
  }

  const GetNewSummonerInfo = async (payload) => {
    if (payload !== null) {
      const info = await axios.put(
        `http://localhost:3001/server/riot/${payload.summonerName}/update/${payload.id}`
      )

      setExtendedSummonerInfo(info)
    }
  }
  const GetSummonerProfile = async () => {
    const response = await axios
      .get(`http://localhost:3001/server/profileinfo/info/${summoner.id}`)
      .then((response) => response.data)
      .then((data) => {
        setSummonerProfile(data)
      })
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
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
        </Routes>
      </main>
    </div>
  )
}

export default App
