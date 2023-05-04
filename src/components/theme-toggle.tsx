"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { IconButton } from "@/components/icon-button";
import { Icons } from "@/components/icons";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const isDarkTheme = theme === "dark";

  const handleToggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <IconButton
      size="sm"
      onClick={handleToggleTheme}
      aria-label="Toggle Light and Dark Mode"
    >
      {isDarkTheme ? <Icons.Sun /> : <Icons.Moon />}
    </IconButton>
  );
};
