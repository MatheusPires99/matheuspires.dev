import Image from "next/future/image";

import { ArrowSquareOut } from "phosphor-react";

import { GithubLogo } from "@/assets/icons/github-logo";
import { Chip } from "@/components/chip";
import { IconButton } from "@/components/icon-button";
import { Link } from "@/components/link";
import { ProjectsQuery } from "@/generated/graphql";

import { Heading } from "../heading";
import {
  ProjectCardContainer,
  ProjectCardImage,
  ProjectCardHeader,
  ProjectCardDescription,
  ProjectCardContent,
} from "./styles";
import { TechsCarousel, TechsCarouselSlider } from "./techs-carousel";

type ProjectCardProps = {
  project: Pick<
    ProjectsQuery["projects"][0],
    | "name"
    | "description"
    | "image"
    | "githubUrl"
    | "websiteUrl"
    | "technologies"
  >;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <ProjectCardContainer>
      <Link href={project.githubUrl} target="_blank">
        <ProjectCardImage>
          <Image
            src={project.image.url}
            alt={project.name}
            fill
            placeholder="blur"
            blurDataURL={(project.image as any).base64}
          />
        </ProjectCardImage>
      </Link>

      <ProjectCardContent>
        <ProjectCardHeader>
          <Heading size="h5" as="strong">
            {project.name}
          </Heading>
          <div>
            <IconButton
              size="md"
              as={Link}
              href={project.githubUrl}
              target="_blank"
              aria-label="GitHub"
            >
              <GithubLogo />
            </IconButton>
            {project.websiteUrl && (
              <IconButton
                size="md"
                as={Link}
                href={project.websiteUrl}
                target="_blank"
                aria-label="Website"
              >
                <ArrowSquareOut />
              </IconButton>
            )}
          </div>
        </ProjectCardHeader>

        <ProjectCardDescription>{project.description}</ProjectCardDescription>

        <TechsCarousel>
          {project.technologies.map((tech) => (
            <TechsCarouselSlider key={tech.id} style={{ width: "fit-content" }}>
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
            </TechsCarouselSlider>
          ))}
        </TechsCarousel>
      </ProjectCardContent>
    </ProjectCardContainer>
  );
};
