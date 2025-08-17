"use client";
import { useState, useEffect } from "react";
import { LogInIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

import { Button } from "../button";
import Logo from "../logo/logo";
import ThemeSwitcher from "../theme-switcher";
import Styles from "./burger-menu.module.css";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, scale: 0, x:50 }}
                animate={{ opacity: 1, scale: 1, x:50 }}
                exit={{ opacity: 0, scale: 0, x:50 }}
                transition={{ duration: 0.2 }}
                className={Styles.burgerMenu}
              >
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li>
                  <Link href="/sign-in">
                    <LogInIcon size="20" />
                  </Link>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>,
          document.body
        )}
    </nav>
  );
}
