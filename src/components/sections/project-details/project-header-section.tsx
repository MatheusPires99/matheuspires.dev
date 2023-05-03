import Image from "next/image";

import { ArrowRight } from "phosphor-react";

import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { GithubLogo } from "@/components/icons";
import { Technology } from "@/generated/graphql";

type ProjectHeaderSectionProps = {
  name: string;
  coverImage: {
    url: string;
    blurDataUrl: string;
  };
  technologies: Pick<
    Technology,
    "id" | "name" | "image" | "websiteUrl" | "highlightColor"
  >[];
  githubUrl: string;
  websiteUrl?: string;
};

export const ProjectHeaderSection = ({
  name,
  coverImage,
  technologies,
  githubUrl,
  websiteUrl,
}: ProjectHeaderSectionProps) => {
  return (
    <section className="pb-14 pt-8 sm:pb-26 sm:pt-16">
      <h1 className="mb-8 text-3xl font-semibold leading-tight sm:text-4xl">
        {name}
      </h1>

      <Image
        src={coverImage.url}
        alt={name}
        width={936}
        height={525}
        quality={100}
        placeholder="blur"
        blurDataURL={coverImage.blurDataUrl}
        className="rounded shadow-lg"
      />

      <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-center md:gap-4">
        <div className="flex flex-col gap-3">
          <span className="text-sm text-accent-text">Technologies</span>

          <div className="flex flex-wrap items-center gap-2">
            {technologies.map((tech) => (
              <Chip key={tech.id} highlightColor={tech.highlightColor} asChild>
                <a
                  href={tech.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
        </div>

        <div className="flex shrink-0 items-center gap-4">
          {websiteUrl && (
            <Button
              variant="outline"
              size="sm"
              className="w-full lg:w-auto"
              asChild
            >
              <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                Go to Website
                <ArrowRight weight="bold" />
              </a>
            </Button>
          )}
          <Button size="sm" className="w-full lg:w-auto" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <GithubLogo />
              Go to Github
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
