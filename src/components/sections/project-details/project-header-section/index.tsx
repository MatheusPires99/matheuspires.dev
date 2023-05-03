import Image from "next/image";

import { ArrowRight } from "phosphor-react";

import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { GithubLogo } from "@/components/icons";
import { Section } from "@/components/section";
import { Technology } from "@/generated/graphql";

import {
  CoverImage,
  ProjectDetails,
  ProjectTechnologies,
  ActionButtons,
} from "./styles";

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
    <Section isFirstSection>
      <h1 className="mb-8 text-3xl font-semibold leading-tight sm:text-4xl">
        {name}
      </h1>

      <CoverImage
        src={coverImage.url}
        alt={name}
        width={936}
        height={525}
        quality={100}
        placeholder="blur"
        blurDataURL={coverImage.blurDataUrl}
      />

      <ProjectDetails>
        <ProjectTechnologies>
          <span>Technologies</span>
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
        </ProjectTechnologies>

        <ActionButtons>
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
        </ActionButtons>
      </ProjectDetails>
    </Section>
  );
};
