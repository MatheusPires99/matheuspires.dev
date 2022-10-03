import Image from "next/future/image";

import { VariantProps } from "@stitches/react";
import { GithubLogo, ArrowSquareOut, FileTs } from "phosphor-react";

import { Card } from "@/components/card";
import { Chip, ChipsGroup } from "@/components/chip";
import { Heading } from "@/components/heading";
import { IconButton } from "@/components/icon-button";
import { Link } from "@/components/link";

import {
  FeaturedProjectContainer,
  ProjectImageContainer,
  ProjectContent,
} from "./styles";

type FeaturedProjectProps = Required<
  VariantProps<typeof FeaturedProjectContainer>
>;

export const FeaturedProject = ({ direction }: FeaturedProjectProps) => {
  return (
    <FeaturedProjectContainer direction={direction}>
      <Link href="">
        <ProjectImageContainer>
          <Image src="/codify.png" alt="" width={602} height={328} />
        </ProjectImageContainer>
      </Link>

      <ProjectContent direction={direction}>
        <Heading size="h3" as="h3">
          <Link variant="primary" href="">
            Codify
          </Link>
        </Heading>

        <ChipsGroup>
          <li>
            <Link href="https://google.com" target="_blank">
              <Chip highlightColor="blue">
                <FileTs />
                TypeScript
              </Chip>
            </Link>
          </li>
          <li>
            <Link href="https://google.com" target="_blank">
              <Chip highlightColor="green">
                <FileTs />
                TypeScript
              </Chip>
            </Link>
          </li>
          <li>
            <Link href="https://google.com" target="_blank">
              <Chip highlightColor="orange">
                <FileTs />
                TypeScript
              </Chip>
            </Link>
          </li>
        </ChipsGroup>

        <Card>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </Card>

        <footer>
          <IconButton as={Link} href="">
            <GithubLogo />
          </IconButton>
          <IconButton as={Link} href="">
            <ArrowSquareOut />
          </IconButton>
        </footer>
      </ProjectContent>
    </FeaturedProjectContainer>
  );
};
