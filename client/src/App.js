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
  const [summoner, setSummoner] = useState(null)

  const handleLogOut = () => {
    setSummoner(null)

    localStorage.clear()
  }

  const checkToken = async () => {
    const summoner = await CheckSession()
    setSummoner(summoner)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const GetNewSummonerInfo = async () => {
    if (summoner !== null) {
      const info = await Client.get(
        `http://localhost:3001/server/riot/${summoner.summonerName}/update/${summoner.id}`
      )
      console.log(info)
    }
  }
  console.log(summoner)
  useEffect(() => {
    GetNewSummonerInfo()
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
            path="/Profile"
            element={<ProfilePage summoner={summoner} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
