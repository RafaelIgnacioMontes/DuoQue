import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import SignUp from './pages/SignUp'
import Client from './services/api'
import axios from 'axios'
import Home from './pages/Home'
import Nav from './components/Nav'
import './App.css'

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogout = () => {
    setUser(null)

    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession(setUser(user))
  }

  useEffect(() => {}, [])

  return (
    <div className="App">
      <Nav user={user} handleLogout={handleLogout} />
      <main>
        <Routes></Routes>
      </main>
    </div>
  )
}

export default App
