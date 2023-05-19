import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">CRM-App-Logo</div>
      <nav>
        <ul className="menu">
          <Link to="/">
            <li>
              <a href="#home">Home</a>
            </li>
          </Link>

          <li>
            <a href="#contact">Contact</a>
          </li>

          <Link to="/admin">
            <li>
              <a href="#services">Admin</a>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
