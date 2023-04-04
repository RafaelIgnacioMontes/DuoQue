import { useState } from 'react'
import { SignInSummoner } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SignIn = ({ setSummoner, GetNewSummonerInfo, summoner }) => {
  let navigate = useNavigate()

  let initialState = { email: '', password: '' }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInSummoner(formValues)
    setFormValues(initialState)
    setSummoner(payload)
    await GetNewSummonerInfo(payload)
    navigate('/Home')
  }
  return (
    <div className="signinpage">
      <div className="signinheaders">
        <h1 className="signinheader">Sign In</h1>
      </div>
      <form className="signinform" onSubmit={handleSubmit}>
        <div className="inputdiv">
          <label htmlFor="email">Email</label>
          <input
            className="inputarea"
            onChange={handleChange}
            name="email"
            type="email"
            value={formValues.email}
            required
          />
        </div>
        <div className="inputdiv">
          <label htmlFor="password">Password</label>
          <input
            className="inputarea"
            onChange={handleChange}
            type="password"
            name="password"
            value={formValues.password}
            required
          />
        </div>
        <div className="signindiv">
          <button
            className="signinbutton"
            disabled={!formValues.email || !formValues.password}
          >
            Login
          </button>
          <Link to="/SignUp">Register</Link>
        </div>
      </form>
    </div>
  )
}

export default SignIn
