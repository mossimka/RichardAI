"use client";
import { useState } from "react";
import { LogInIcon, Menu, X } from "lucide-react";
import Link from "next/link";

import { Button } from "../button";
import Logo from "../logo/logo";
import ThemeSwitcher from "../theme-switcher";
import Styles from "./burger-menu.module.css";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mobile-header glass">
      <ul>
        <li>
          <Logo />
        </li>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <li>
            <Button
              style={{ padding: "0.6rem", borderRadius: "10px" }}
              variant="outline"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size="20" /> : <Menu size="20" />}
            </Button>
          </li>
        </div>
      </ul>
      {isOpen && (
        <ul className="burger-menu">
          <li>
            <ThemeSwitcher />
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
        </ul>
      )}
    </nav>
  );
}
