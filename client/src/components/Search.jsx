import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = ({ summoner }) => {
  let initialState = {
    summonerName: ''
  }

  const [search, setSearch] = useState(initialState)

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.get(`http://localhost:3001/server/summoner/${e.summonerName}`)
    setProfileInfo(initialState)
    navigate('/ProfilePage/:summonerName')
  }
  return (
    <div className="greaterSearch">
      <div className="searchForm">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">Search:</label>
          <input
            id="summonerName"
            type="text"
            rows="2"
            cols="80"
            onChange={handleChange}
            value={search.summonerName}
          />
        </form>
      </div>
    </div>
  )
}
