import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterSummoner } from '../services/Auth'

const SignUp = ({ GetNewSummonerInfo }) => {
  let navigate = useNavigate()
  const initialState = {
    summonerName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterSummoner({
      summonerName: formValues.summonerName,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues(initialState)
    navigate('/')
    GetNewSummonerInfo()
  }

  return (
    <div className="signuppage">
      <div className="cardoverlay">
        <h1>Register</h1>
        <form className="registerform" onSubmit={handleSubmit}>
          <div className="inputwrapper">
            <label htmlFor="summonerName">Summoner</label>
            <input
              onChange={handleChange}
              name="summonerName"
              type="text"
              value={formValues.summonerName}
              required
            />
          </div>
          <div className="inputwrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              value={formValues.email}
              required
            />
          </div>
          <div className="inputwrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <div className="registerbuttondiv">
            <button
              className="registerbutton"
              disabled={
                !formValues.email ||
                !formValues.summonerName ||
                (!formValues.password &&
                  formValues.confirmPassword === formValues.password)
              }
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default SignUp
