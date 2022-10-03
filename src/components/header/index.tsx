import { useRouter } from "next/router";

import { Container } from "../container";
import { Link } from "../link";
import { HeaderContainer, Navigation } from "./styles";

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <HeaderContainer>
      <Container
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
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
      </Container>
    </HeaderContainer>
  );
};
