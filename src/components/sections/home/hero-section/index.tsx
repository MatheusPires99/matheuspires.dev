import Image from "next/future/image";

import { Button } from "@/components/button";
import { Chip, ChipsGroup } from "@/components/chip";
import { Heading } from "@/components/heading";
import { Link } from "@/components/link";
import { Section } from "@/components/section";
import { TechnologiesQuery } from "@/generated/graphql";

import { CallToActions, HeroContent, HeroImage, Introduction } from "./styles";

type HeroSectionProps = {
  technologies: TechnologiesQuery["technologies"];
};

export const HeroSection = ({ technologies }: HeroSectionProps) => {
  return (
    <Section
      css={{ display: "flex", alignItems: "center", gap: 84 }}
      isFirstSection
    >
      <HeroImage src="/me.jpg" alt="Matheus's photo" width={298} height={298} />

      <HeroContent>
        <Introduction>
          <span>Hi, my name is</span>
          <Heading>Matheus Pires</Heading>
          <p>
            I'm Matheus, a software developer with 3 years of experience focused
            on front-end. I have worked in various industries such as clothing
            retail, video streaming and hospitality. I love building great
            products with interesting data, beautiful UI and great UX.
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
