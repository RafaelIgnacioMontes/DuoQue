import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Search = ({ summoner }) => {
  const [searchQuery, setSearchQuery] = useState()

  const SearchFunc = async () => {
    let response = await axios.get(
      `http://localhost:3001/server/summoner/summoner/${summoner.summonerName}`
    )
  }

  return (
    <div className="searchBarGreater">
      <form action="search">
        <label htmlFor="searchbar">Search:</label>
        <textarea
          className="searchbar"
          name=""
          id=""
          cols="30"
          rows="2"
        ></textarea>
      </form>
    </div>
  )
}

export default Search
