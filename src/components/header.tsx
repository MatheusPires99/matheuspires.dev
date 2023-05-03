import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Moon, Sun } from "phosphor-react";

import { IconButton } from "@/components/icon-button";
import { MatheusPiresLogo } from "@/components/icons";

export const Header = () => {
  const { pathname } = useRouter();
  const { theme, setTheme } = useTheme();
  const [canToggleTheme, setCanToggleTheme] = useState(false);

  const isDarkTheme = theme === "dark";

  const handleToggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  // Avoid Hydration Mismatch: https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  useEffect(() => {
    setCanToggleTheme(true);
  }, []);

  return (
    <header className="bg-background/75 fixed top-0 z-50 h-20 w-full border-b border-accent-border backdrop-blur-md">
      <div className="container flex h-full items-center justify-between">
        <Link
          href="/"
          className="text-text-base transition hover:text-text-contrast"
        >
          <div className="flex items-center gap-2">
            <MatheusPiresLogo />
            <span className="hidden sm:block">Matheus Pires</span>
          </div>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-8">
          <Link
            href="/about"
            data-active={pathname === "/about"}
            className="rounded-lg px-3 py-2 text-text-base transition hover:bg-shape hover:text-text-contrast data-[active=true]:text-text-contrast"
          >
            About
          </Link>
          <Link
            href="/projects"
            data-active={pathname === "/projects"}
            className="rounded-lg px-3 py-2 text-text-base transition hover:bg-shape hover:text-text-contrast data-[active=true]:text-text-contrast"
          >
            Projects
          </Link>

          {canToggleTheme && (
            <IconButton
              size="sm"
              onClick={handleToggleTheme}
              aria-label="Toggle Light and Dark Mode"
            >
              {isDarkTheme ? <Sun /> : <Moon />}
            </IconButton>
          )}
        </nav>
      </div>
    </header>
  );
};
