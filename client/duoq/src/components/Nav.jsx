import { NavLink, Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <div className="greaterdivnav">
        <div className="logo">
          <NavLink to="/" className="logo"></NavLink>
        </div>
        <div className="nonlogodivnav">
          <Link to="/profile" className="navelements">
            Profile
          </Link>
          <Link to="/Home" className="navelements">
            Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <header>
      <nav>
        <div className="allnavcomponents"></div>
      </nav>
    </header>
  )
}
export default Nav
