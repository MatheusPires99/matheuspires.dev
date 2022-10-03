import { GithubLogo, LinkedinLogo } from "phosphor-react";

import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { IconButton } from "@/components/icon-button";
import { Link } from "@/components/link";

import { FooterContainer, GetInTouch, ContactInfo, DesignedBy } from "./styles";

export const Footer = () => {
  return (
    <Container as="footer">
      <FooterContainer as="div">
        <GetInTouch>
          <Heading size="h2" as="h2" centered>
            Get In Touch
          </Heading>
          <p>
            I&apos;m always open to chat, so please don&apos;t hesitate
            contacting me!
          </p>
          <Button variant="outline">Say Hello</Button>
        </GetInTouch>

        <ContactInfo>
          <strong>© Matheus Pires 2022</strong>
          <div>
            <IconButton as={Link} href="" target="_blank">
              <LinkedinLogo />
            </IconButton>
            <IconButton as={Link} href="" target="_blank">
              <GithubLogo />
            </IconButton>
          </div>
        </ContactInfo>

        <DesignedBy>
          Designed by{" "}
          <Link variant="hightlight" href="" target="_blank">
            Gabriela Rezende
          </Link>
        </DesignedBy>
      </FooterContainer>
    </Container>
  );
};
