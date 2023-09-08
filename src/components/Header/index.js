// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <div className="ul-container">
        <ul className="nav-menu">
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <li>Products</li>
          <li>Cart</li>
        </ul>
        <button type="button" className="logout-desktop-btn">
          Logout
        </button>
      </div>
    </div>
  </nav>
)
export default Header
