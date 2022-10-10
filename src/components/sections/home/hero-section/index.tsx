import Image from "next/future/image";

import { Button } from "@/components/button";
import { Chip, ChipsGroup } from "@/components/chip";
import { Heading } from "@/components/heading";
import { Link } from "@/components/link";
import { Section } from "@/components/section";
import { TechnologiesQuery } from "@/generated/graphql";

import avatar from "../../../../../public/avatar.png";
import { HeroImage, HeroContent, Introduction, CallToActions } from "./styles";

type HeroSectionProps = {
  technologies: TechnologiesQuery["technologies"];
};

export const HeroSection = ({ technologies }: HeroSectionProps) => {
  return (
    <Section
      css={{
        display: "flex",
        alignItems: "center",
        gap: "5.25rem",

        "@laptop": {
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "3rem",
        },
      }}
      isFirstSection
    >
      <HeroImage
        src={avatar}
        alt="Matheus's photo"
        width={298}
        height={298}
        placeholder="blur"
      />

      <HeroContent>
        <Introduction>
          <span>Hi, my name is</span>
          <Heading
            size={{
              "@initial": "h1",
              "@mobile": "h2",
            }}
          >
            Matheus Pires
          </Heading>
          <p>
            I'm Matheus, a Front-end Developer and a JavaScript enthusiast. I
            have worked in various industries such as clothing retail, video
            streaming and hospitality. I love building great products with
            interesting data, beautiful UI and great UX.
          </p>
        </Introduction>

        <ChipsGroup>
          {technologies.map((tech) => (
            <li key={tech.id}>
              <Chip
                highlightColor={tech.highlightColor}
                as={Link}
                href={tech.websiteUrl}
                target="_blank"
              >
                <Image
                  src={tech.image.url}
                  alt={tech.name}
                  width={18}
                  height={18}
                />
                {tech.name}
              </Chip>
            </li>
          ))}
        </ChipsGroup>

        <CallToActions>
          <Button as={Link} href="/about">
            More about me
          </Button>
          <Button
            variant="outline"
            as={Link}
            href="/resume.pdf"
            target="_blank"
          >
            Resume
          </Button>
        </CallToActions>
      </HeroContent>
    </Section>
  );
};
