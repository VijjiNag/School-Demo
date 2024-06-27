import {Link, useLocation} from 'react-router-dom'
import {useState} from 'react'
import {IoIosMenu, IoIosClose} from 'react-icons/io'
import Announcements from '../Announcements'
import './index.css'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const homeActive = location.pathname === '/' ? 'nav-item-active' : 'nav-item'
  const aboutActive =
    location.pathname === '/about' ? 'nav-item-active' : 'nav-item'
  const programsActive =
    location.pathname === '/programs' ? 'nav-item-active' : 'nav-item'

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="container">
      <Announcements />
      <div className={`nav-bg-container ${isMenuOpen ? 'expanded' : ''}`}>
        <div className="nav-logo-container">
          <img
            className="logo"
            src="https://res.cloudinary.com/dhfmjj1j9/image/upload/v1719121650/Group_134_gltj7x.png"
            alt="logo"
          />
        </div>
        <div
          className="nav-menu-icon"
          onClick={toggleMenu}
          role="button"
          tabIndex={0}
          onKeyPress={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              toggleMenu()
            }
          }}
        >
          {isMenuOpen ? <IoIosClose size={30} /> : <IoIosMenu size={30} />}
        </div>
        <div className={`nav-items-container ${isMenuOpen ? 'open' : ''}`}>
          <Link className={homeActive} to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link className={aboutActive} to="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link className={programsActive} to="/programs" onClick={toggleMenu}>
            Programs
          </Link>
        </div>
        <div className="sign-in-btn-container">
          <button className="sign-in-btn" type="button">
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
