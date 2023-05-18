import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">CRM-App-Logo</div>
      <nav>
        <ul className="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">Sing-Up</a>
          </li>
          <li>
            <a href="#services">Admin</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
