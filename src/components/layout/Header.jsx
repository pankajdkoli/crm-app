import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav>
        <ul className="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">LogIn</a>
          </li>
          <li>
            <a href="#services">SingIn</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
