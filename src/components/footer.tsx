import { LinkedinLogo } from "phosphor-react";

import { IconButton } from "@/components/icon-button";
import { GithubLogo } from "@/components/icons";
import { Link } from "@/components/link";

import { Section } from "./section";

export const Footer = () => {
  return (
    <Section as="footer" css={{ paddingTop: 0 }}>
      <div className="container flex flex-col items-center">
        <div className="flex items-center gap-10">
          <strong className="text-lg">© Matheus Pires 2022</strong>
          <div className="flex items-center">
            <IconButton
              as={Link}
              href="https://www.linkedin.com/in/matheus-pires-521271180/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <LinkedinLogo />
            </IconButton>
            <IconButton
              as={Link}
              href="https://github.com/MatheusPires99"
              target="_blank"
              aria-label="GitHub"
            >
              <GithubLogo />
            </IconButton>
          </div>
        </div>

        <div className="mt-4">
          <span className="text-accent-text">Designed by</span>{" "}
          <Link
            variant="hightlight"
            href="https://www.linkedin.com/in/gabriela-rezende-61a7881ba/"
            target="_blank"
          >
            Gabriela Rezende
          </Link>
        </div>
      </div>
    </Section>
  );
};
