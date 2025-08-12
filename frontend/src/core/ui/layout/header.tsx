import React from "react";
import ThemeSwitcher from "../theme-switcher";
import Logo from "../logo";
import Link from "next/link";
import BurgerMenu from "../burger-menu";
import { LogInIcon } from "lucide-react";

const Header = () => {
  return (
    <header>
      <nav className="glass desktop">
        <ul>
          <li>
            <Logo />
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/sign-in">
              <LogInIcon size="20" />
            </Link>
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
      <BurgerMenu />
    </header>
  );
};

export default Header;
