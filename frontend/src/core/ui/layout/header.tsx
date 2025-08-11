import React from "react";
import ThemeSwitcher from "../theme-switcher";
import Logo from "../logo";

const Header = () => {
  return (
    <header>
      <nav className="glass">
        <ul>
          <li>
            <Logo />
          </li>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
