import { useRouter } from "next/router";

import { Link } from "@/components/link";

import { HeaderContainer, HeaderContent, Navigation } from "./styles";

export const Header = () => {
  const { pathname } = useRouter();

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
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
};
