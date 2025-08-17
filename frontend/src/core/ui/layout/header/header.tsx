import React from "react";
import ThemeSwitcher from "../../theme-switcher";
import Logo from "../../logo/logo";
import Link from "next/link";
import BurgerMenu from "../../burger-menu/burger-menu";
import { LogInIcon } from "lucide-react";

import Styles from "./header.module.css";
import { Button } from "../../button";

const Header = () => {
  return (
    <header>
      <nav className="glass desktop">
        <ul className={Styles.navList}>
          <li>
            <Logo />
          </li>
          <li>
            <ul className={Styles.navAction}>
              <li>
                <Button variant="outline">
                  <Link href="/about">About</Link>
                </Button>
              </li>
              <li>
                <Button variant="outline">
                  <Link href="/contact">Contact</Link>
                </Button>
              </li>
              <li>
                <Button variant="outline">
                  <Link href="/sign-in">
                    <LogInIcon size="20" />
                  </Link>
                </Button>
              </li>
              <li>
                <ThemeSwitcher />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <BurgerMenu />
    </header>
  );
};

export default Header;
