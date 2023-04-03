import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const EditProfile = ({ summoner }) => {
  const initialState = {
    preferedRole: '',
    champions: '',
    lookingFor: ''
  }

  let navigate = useNavigate()

  const [profileInfo, setProfileInfo] = useState(initialState)

  const handleChange = (e) => {
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(
      `http://localhost:3001/server/profileinfo/info/${summoner.id}`,
      profileInfo
    )
    setProfileInfo(initialState)
    navigate('/ProfilePage')
  }
  return (
    <div className="greaterdivforform">
      <form className="editprofileform">
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
