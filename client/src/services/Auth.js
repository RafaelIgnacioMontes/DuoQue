import Client from './api'

export const SignInSummoner = async (data) => {
  try {
    const res = await Client.post('/server/auth/login', data)
    // Set the current signed in Summoners token to localStorage
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('summonerId', res.data.summoner.id)
    return res.data.summoner
  } catch (error) {
    throw error
  }
}

export const RegisterSummoner = async (data) => {
  try {
    const res = await Client.post('/server/auth/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Client.get('/server/auth/session')
    return res.data
  } catch (error) {
    throw error
  }
}
