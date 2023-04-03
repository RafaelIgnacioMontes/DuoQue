import { NavLink, Link } from 'react-router-dom'
import tristana from '../images/pngaaa.com-5200249.png'
const Nav = ({ summoner, handleLogOut }) => {
  let summonerOptions
  if (summoner) {
    summonerOptions = (
      <div className="greaterdivnav">
        <div className="logo">
          <Link to="/">
            <img className="logonosummoner" src={tristana} alt="duoqlogo" />
          </Link>
        </div>
        <div className="nonlogodivnavparent">
          <div className="nonlogodivnav">
            <Link to="/ProfilePage" className="navelements">
              Profile
            </Link>
            <Link to="/Home" className="navelements">
              Home
            </Link>
            <Link className="navelements" to="/" onClick={handleLogOut}>
              LogOut
            </Link>
          </div>
        </div>
      </div>
    )
  }
  const defaultOptions = (
    <div className="greaterdivnav">
      <div className="logo">
        <div>
          <img src={tristana} alt="duoqlogo" className="logonosummoner" />
        </div>
      </div>
    </div>
  )
  return (
    <header>
      <nav>{summoner ? summonerOptions : defaultOptions}</nav>
    </header>
  )
}

export default Nav
