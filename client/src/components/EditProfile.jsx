import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Client from '../services/api'

const EditProfile = ({
  summoner,
  GetSummonerInfo,
  profileInfo,
  setProfileInfo
}) => {
  let navigate = useNavigate()
  let summonerId = summoner.id
  const [updateProfile, setUpdateProfile] = useState({
    summonerId,
    preferedRole: '',
    champions: '',
    lookingFor: ''
  })

  const handleChange = (e) => {
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value })
  }

  const handleChangeUpdate = (e) => {
    setUpdateProfile({ ...updateProfile, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(
      `http://localhost:3001/server/profileinfo/create/info/${summonerId}`,
      profileInfo
    )
    setProfileInfo(profileInfo)
    GetSummonerInfo()
  }

  return (
    <div className="greaterdivforform">
      <form className="editprofileform" onSubmit={handleSubmit}>
        <div className="inputdivforpreferedrole">
          <div className="preferedrole">Roles:</div>
          <input
            onChange={handleChange}
            name="preferedRole"
            type="text"
            value={profileInfo.preferedRole}
            required
          />
        </div>
        <div className="inputdivforchampions">
          <label>Champions:</label>
          <input
            onChange={handleChange}
            type="text"
            name="champions"
            value={profileInfo.champions}
            required
          />
        </div>
        <div className="inputdivlookingFor">
          <label>Looking for:</label>
          <input
            onChange={handleChange}
            type="text"
            name="lookingFor"
            value={profileInfo.lookingFor}
            required
          />
        </div>
        <div className="submitbutton">
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default EditProfile
