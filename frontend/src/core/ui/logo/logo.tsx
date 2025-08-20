"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import Loader from "../loader";
import Styles from "./logo.module.css";

export default function Logo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loader size={40} />;
  }

  return (
    <Link href="/" className={Styles.logo}>
      <Image
        width={40}
        height={40}
        src={theme === "dark" ? "/images/logo_dark.webp" : "/images/logo.webp"}
        alt="Logo"
      />
      {/* <h1>Richard AI</h1> */}
    </Link>
  );
}
