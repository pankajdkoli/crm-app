import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Global Vision-Tech</div>
      <nav>
        <ul className="menu">
          <Link to="/">
            <li>
              <a href="#home">Home</a>
            </li>
          </Link>

          <Link to="/contact">
            <li>
              <a href="#contact">Contact</a>
            </li>
          </Link>

          <Link to="/admin">
            <li>
              <a href="#services">Admin</a>
            </li>
            {/* <a>
              <i class="fa-light fa-user"></i>{" "}
            </a> */}
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
