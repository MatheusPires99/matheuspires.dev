import { useTheme } from "next-themes";
import { useRouter } from "next/router";

import { Moon, Sun } from "phosphor-react";

import { Link } from "@/components/link";

import { IconButton } from "../icon-button";
import { HeaderContainer, HeaderContent, Navigation } from "./styles";

export const Header = () => {
  const { pathname } = useRouter();
  const { theme, setTheme } = useTheme();

  const isDarkTheme = theme === "dark";

  const handleToggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link variant="primary" href="/">
          Matheus Pires
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
          <IconButton size="md" onClick={handleToggleTheme}>
            {isDarkTheme ? <Sun /> : <Moon />}
          </IconButton>
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
};
