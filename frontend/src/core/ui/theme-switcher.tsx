"use client";
import { useTheme } from "next-themes";
import { Button } from "./button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Loader from "./loader";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {mounted ? theme === "dark" ? <SunIcon /> : <MoonIcon /> : <Loader />}
    </Button>
  );
}
