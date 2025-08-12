"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loader from "./loader";
import Link from "next/link";

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
    <Link href="/">
      <Image
        width={40}
        height={40}
        src={
          theme === "dark" ? "/vids/logo-dark.webp" : "/vids/logo-light.webp"
        }
        alt="Logo"
      />
    </Link>
  );
}
