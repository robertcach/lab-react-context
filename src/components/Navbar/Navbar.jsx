import { useThemeContext } from "../../contexts/ThemeContext"
import { Link } from "react-router-dom"
import './Navbar.scss'

const Navbar = () => {
  const { theme, toggleTheme } = useThemeContext()


  return (
    <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
      <div className="container-fluid">

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active">Home</Link>
            </li>
          </ul>
        </div>
        <div>
        <button onClick={toggleTheme} className="navbar__color">{theme}</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar