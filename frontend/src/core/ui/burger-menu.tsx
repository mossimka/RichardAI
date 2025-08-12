"use client";
import { useState } from "react";
import { LogInIcon, Menu, X } from "lucide-react";
import { Button } from "./button";
import Logo from "./logo";
import ThemeSwitcher from "./theme-switcher";
import Link from "next/link";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mobile glass">
      <ul>
        <li>
          <Logo />
        </li>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <li>
            <ThemeSwitcher />
          </li>
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
