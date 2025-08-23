import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link href="/privacy-policy">Privacy</Link>
          </li>
          <li>
            <Link href="/terms-of-service">Terms</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
