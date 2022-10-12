import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Moon, Sun } from "phosphor-react";

import { IconButton } from "@/components/icon-button";
import { MatheusPiresLogo } from "@/components/icons";
import { Link } from "@/components/link";

import {
  HeaderContainer,
  LogoContainer,
  HeaderContent,
  Navigation,
} from "./styles";

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
    <HeaderContainer>
      <HeaderContent>
        <Link variant="primary" href="/">
          <LogoContainer>
            <MatheusPiresLogo />
            <span>Matheus Pires</span>
          </LogoContainer>
        </Link>

        <Navigation>
          <Link
            variant="primary"
            isSelected={pathname === "/about"}
            href="/about"
          >
            About
          </Link>
          <Link
            variant="primary"
            isSelected={pathname === "/projects"}
            href="/projects"
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
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
};
