import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import gold from '../images/tier-icons/gold_iii.png'
import silver from '../images/tier-icons/silver_iii.png'
import bronze from '../images/tier-icons/bronze_iii.png'
import diamond from '../images/tier-icons/diamond_iii.png'
import plat from '../images/tier-icons/platinum_iii.png'
import Client from '../services/api'

const Search = ({ summoner }) => {
  const [searchQuery, setSearchQuery] = useState()

  const [searchResults, setSearchResults] = useState([])

  let summonerId = localStorage.getItem('summonerId')

  const addFriend = async () => {
    await Client.post(
      `http://localhost:3001/server/friendlist/addFriend/${summonerId}/friend/${searchResults.id}`
    )
  }
  let tiery
  if (searchResults.tier === 'GOLD') {
    tiery = <img src={gold} />
  } else if (searchResults.tier === 'SILVER') {
    tiery = <img src={silver} />
  } else if (searchResults.tier === 'BRONZE') {
    tiery = <img src={bronze} />
  } else if (searchResults.tier === 'DIAMOND') {
    tiery = <img src={diamond} />
  } else if (searchResults.tier === 'PLATINUM') {
    tiery = <img src={plat} />
  }
  let winloss
  if (searchResults.wins && searchResults.losses) {
    winloss = (
      <div>
        Wins: {searchResults.wins} Losses: {searchResults.losses}
      </div>
    )
  }
  let friends
  if (searchResults.tier) {
    friends = <button onClick={addFriend}>Add Friend</button>
  }
  let add
  if (searchResults.tier) {
    add = (
      <div className="searchResults">
        <div className="searchSummonerName">{searchResults.summonerName}</div>
        <div className="searchSummonerLevel">
          Summoner Level: {searchResults.summonerLevel}
        </div>
        <div className="searchRank">
          {searchResults.tier} {searchResults.rank}
        </div>
        <div className="rankimage">{tiery}</div>
        {winloss}
        {friends}
      </div>
    )
  }
  console.log(searchQuery)
  const SearchFunc = async () => {
    let response = await axios.get(
      `http://localhost:3001/server/summoner/summoner/${searchQuery}`
    )
    console.log(response.data[0])
    setSearchResults(response.data[0])
  }

  const handleChange = async (e) => {
    setSearchQuery(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    SearchFunc()
  }

  return (
    <div className="searchBarGreater">
      <div className="form">
        <form action="search" onSubmit={handleSubmit}>
          <label htmlFor="searchbar">Search:</label>
          <textarea
            onChange={handleChange}
            className="searchbar"
            name=""
            id="searchQuery"
            cols="30"
            rows="2"
            value={searchQuery}
          ></textarea>
          <button type="submit">Search</button>
        </form>
        {add}
      </div>
    </div>
  )
}

export default Search
