import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Search = ({ summoner }) => {
  const [searchQuery, setSearchQuery] = useState()

  const [searchResults, setSearchResults] = useState([])

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

      <div className="searchSummonerName">{searchResults.summonerName}</div>
    </div>
  )
}

export default Search
