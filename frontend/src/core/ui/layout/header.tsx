import React from "react";
import { SunIcon, MoonIcon } from "lucide-react";
import { Button } from "../button";
import ThemeSwitcher from "../theme-switcher";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
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
