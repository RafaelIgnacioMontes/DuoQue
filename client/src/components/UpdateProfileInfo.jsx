import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Client from '../services/api'

const UpdateProfile = ({ summoner, summonerProfile }) => {
  const initialState = {
    preferedRole: '',
    champions: '',
    lookingFor: ''
  }

  const [updateForm, setUpdateForm] = useState(initialState)
  const handleChangeUpdate = (event) => {
    setUpdateForm({
      ...updateForm,
      [event.target.id]: event.target.value
    })
  }
  console.log(summonerProfile)
  const handleSubmitUpdate = async (event) => {
    event.preventDefault()
    await Client.put(
      `http://localhost:3001/server/profileinfo/update/${summonerProfile.id}/user/${summoner.id}`,
      updateForm
    )
  }
  return (
    <div className="greaterdivforform">
      <form className="editprofileform" onSubmit={handleSubmitUpdate}>
        <div className="inputdivforpreferedrole">
          <div className="preferedrole">Roles:</div>
          <input
            onChange={handleChangeUpdate}
            id="preferedRole"
            type="text"
            value={updateForm.preferedRole}
            required
          />
        </div>
        <div className="inputdivforchampions">
          <label>Champions:</label>
          <input
            onChange={handleChangeUpdate}
            type="text"
            id="champions"
            value={updateForm.champions}
            required
          />
        </div>
        <div className="inputdivlookingFor">
          <label>Looking for:</label>
          <input
            onChange={handleChangeUpdate}
            type="text"
            id="lookingFor"
            value={updateForm.lookingFor}
            required
          />
        </div>
        <div className="submitbutton">
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateProfile
