import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Client from '../services/api'

const EditProfile = ({ summoner, GetSummonerInfo }) => {
  const initialState = {
    preferedRole: '',
    champions: '',
    lookingFor: ''
  }

  let navigate = useNavigate()

  const [profileInfo, setProfileInfo] = useState(initialState)

  const [updateProfile, setUpdateProfile] = useState({
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
      `http://localhost:3001/server/profileinfo/info/${summoner.id}`,
      profileInfo
    )
    setProfileInfo(initialState)
    GetSummonerInfo()
  }

  const updateInfo = async (e) => {
    e.preventDefault()
    await Client.put(
      `http://localhost:3001/server/profileinfo/update/${profileInfo.id}/user/${summoner.id}`,
      updateProfile
    )
    GetSummonerInfo()
  }
  return (
    <div className="greaterdivforform">
      <form
        className="editprofileform"
        onSubmit={handleSubmit || handleChangeUpdate}
      >
        <div className="inputdivforpreferedrole">
          <div className="preferedrole">Roles:</div>
          <input
            onChange={handleChange || handleChangeUpdate}
            name="preferedRole"
            type="text"
            value={profileInfo.preferedRole}
            required
          />
        </div>
        <div className="inputdivforchampions">
          <label>Champions:</label>
          <input
            onChange={handleChange || handleChangeUpdate}
            type="text"
            name="champions"
            value={profileInfo.champions}
            required
          />
        </div>
        <div className="inputdivlookingFor">
          <label>Looking for:</label>
          <input
            onChange={handleChange || handleChangeUpdate}
            type="text"
            name="lookingFor"
            value={profileInfo.lookingFor}
            required
          />
        </div>
        <div className="submitbutton">
          <button>Submit</button>
          <button onClick={updateInfo}>Update</button>
        </div>
      </form>
    </div>
  )
}

export default EditProfile
