import Image from "next/image";

import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { Link } from "@/components/link";
import { TechnologiesQuery } from "@/generated/graphql";

import avatar from "../../../../../public/avatar.png";
import { HeroImage, HeroContent, Summary, CallToActions } from "./styles";

type HeroSectionProps = {
  technologies: TechnologiesQuery["technologies"];
};

export const HeroSection = ({ technologies }: HeroSectionProps) => {
  return (
    <section className="flex flex-col items-start gap-12 pb-14 pt-8 sm:pb-26 sm:pt-16 lg:flex-row lg:items-center lg:gap-20">
      <HeroImage
        src={avatar}
        alt="Matheus's photo"
        width={298}
        height={298}
        quality={100}
        placeholder="blur"
      />

      <HeroContent>
        <Summary>
          <span>Hi, my name is</span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
            Matheus Pires
          </h1>
          <p>
            I'm Matheus, a Front-end Developer and a JavaScript enthusiast. I
            have worked in various industries such as clothing retail, video
            streaming and hospitality. I love building great products with
            interesting data, beautiful UI and great UX.
          </p>
        </Summary>

        <div className="flex flex-wrap items-center gap-2">
          {technologies.map((tech) => (
            <Chip key={tech.id} highlightColor={tech.highlightColor} asChild>
              <a href={tech.websiteUrl} target="_blank" rel="noreferrer">
                <Image
                  src={tech.image.url}
                  alt={tech.name}
                  width={18}
                  height={18}
                />
                {tech.name}
              </a>
            </Chip>
          ))}
        </div>

        <CallToActions>
          <Button asChild>
            <Link href="/about">More about me</Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="/resume.pdf" target="_blank">
              Resume
            </a>
          </Button>
        </CallToActions>
      </HeroContent>
    </section>
  );
};
