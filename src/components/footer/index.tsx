import { LinkedinLogo } from "phosphor-react";

import { GithubLogo } from "@/assets/icons/github-logo";
import { IconButton } from "@/components/icon-button";
import { Link } from "@/components/link";

import { Section } from "../section";
import { FooterContainer, ContactInfo, DesignedBy } from "./styles";

export const Footer = () => {
  return (
    <Section as="footer" css={{ paddingTop: 0 }}>
      <FooterContainer>
        <ContactInfo>
          <strong>© Matheus Pires 2022</strong>
          <div>
            <IconButton
              as={Link}
              href="https://www.linkedin.com/in/matheus-pires-521271180/"
              target="_blank"
            >
              <LinkedinLogo />
            </IconButton>
            <IconButton
              as={Link}
              href="https://github.com/MatheusPires99"
              target="_blank"
            >
              <GithubLogo />
            </IconButton>
          </div>
        </ContactInfo>

        <DesignedBy>
          Designed by{" "}
          <Link
            variant="hightlight"
            href="https://www.linkedin.com/in/gabriela-rezende-61a7881ba/"
            target="_blank"
          >
            Gabriela Rezende
          </Link>
        </DesignedBy>
      </FooterContainer>
    </Section>
  );
};
