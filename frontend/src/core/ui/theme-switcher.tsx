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
    <Button
      style={{ padding: "0.6rem", borderRadius: "10px" }}
      variant="outline"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {mounted ? (
        theme === "dark" ? (
          <SunIcon size={20} />
        ) : (
          <MoonIcon size={20} />
        )
      ) : (
        <Loader size={20} />
      )}
    </Button>
  );
}
