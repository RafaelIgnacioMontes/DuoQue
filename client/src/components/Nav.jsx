import { NavLink, Link } from 'react-router-dom'
const Nav = ({ summoner, handleLogOut }) => {
  let summonerOptions
  if (summoner) {
    summonerOptions = (
      <div className="greaterdivnav">
        <div className="logo">
          <Link to="/" className="logo">
            <img
              className="logonosummoner"
              src="https://www.vhv.rs/dpng/d/15-159387_transparent-background-hand-shake-clip-art-hd-png.png"
              alt="duoqlogo"
            />
          </Link>
        </div>
        <div className="nonlogodivnav">
          <Link to="/profile" className="navelements">
            Profile
          </Link>
          <Link to="/Home" className="navelements">
            Home
          </Link>
          <Link className="logout" to="/SignIn" onClick={handleLogOut}>
            LogOut
          </Link>
        </div>
      </div>
    )
  }
  const defaultOptions = (
    <div className="greaterdivnav">
      <div className="logo">
        <div>
          <img
            src="https://www.vhv.rs/dpng/d/15-159387_transparent-background-hand-shake-clip-art-hd-png.png"
            alt="duoqlogo"
            className="logonosummoner"
          />
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
