import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { TechnologiesQuery } from "@/generated/graphql";

import avatar from "../../../../public/avatar.png";

type HeroSectionProps = {
  technologies: TechnologiesQuery["technologies"];
};

export const HeroSection = ({ technologies }: HeroSectionProps) => {
  return (
    <section className="flex flex-col items-start gap-12 pb-14 pt-8 sm:pb-26 sm:pt-16 lg:flex-row lg:items-center lg:gap-20">
      <Image
        src={avatar}
        alt="Matheus's photo"
        width={298}
        height={298}
        quality={100}
        placeholder="blur"
        className="h-44 w-44 rounded shadow-lg sm:h-72 sm:w-72"
      />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <span className="font-mono text-base text-text-contrast sm:text-lg">
            Hi, my name is
          </span>
          <h1 className="mt-2 text-4xl font-semibold leading-tight sm:text-6xl">
            Matheus Pires
          </h1>
          <p className="mt-4 text-base leading-normal text-accent-text sm:text-lg md:mt-6">
            I'm Matheus, a Front-end Developer and a JavaScript enthusiast. I
            have worked in various industries such as clothing retail, video
            streaming and hospitality. I love building great products with
            interesting data, beautiful UI and great UX.
          </p>
        </div>

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

        <div className="mt-8 flex items-center gap-4">
          <Button asChild>
            <Link href="/about">More about me</Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="/resume.pdf" target="_blank">
              Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
