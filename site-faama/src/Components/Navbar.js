import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import logo from "../assets/Group 6.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo FAAMA" />
          </Link>
        </div>
        
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/noticias">Notícias</Link></li>
          <li><Link to="/cursos">Cursos</Link></li> 
          <li><Link to="/graduacao">Graduação</Link></li>
          <li><Link to="/colegio">Colégio</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;