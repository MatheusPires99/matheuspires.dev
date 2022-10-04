import { LinkedinLogo } from "phosphor-react";

import { GithubLogo } from "@/assets/icons/github-logo";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Divider } from "@/components/divider";
import { Heading } from "@/components/heading";
import { IconButton } from "@/components/icon-button";
import { Link } from "@/components/link";

import { FooterContainer, GetInTouch, ContactInfo, DesignedBy } from "./styles";

export const Footer = () => {
  return (
    <Container as="footer">
      <Divider />

      <FooterContainer as="div">
        <GetInTouch>
          <Heading size="h2" as="h2" centered>
            Get In Touch
          </Heading>
          <p>
            I'm always open to chat, so please don't hesitate contacting me!
          </p>
          <Button
            variant="outline"
            as={Link}
            href="mailto:matheushenriquepires99@gmail.com"
          >
            Say Hello
          </Button>
        </GetInTouch>

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
    </Container>
  );
};
