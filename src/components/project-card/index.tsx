import { useTheme } from "next-themes";
import Image from "next/future/image";

import { ArrowSquareOut } from "phosphor-react";

import { GithubLogo } from "@/assets/icons/github-logo";
import { Chip } from "@/components/chip";
import { Heading } from "@/components/heading";
import { IconButton } from "@/components/icon-button";
import { Link } from "@/components/link";
import { ProjectsQuery } from "@/generated/graphql";

import {
  ProjectCardContainer,
  ProjectCardImage,
  ProjectCardHead,
  ProjectCardDescription,
  ProjectCardContent,
} from "./styles";
import { TechsCarousel, TechSlider } from "./techs-carousel";

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
  const { theme } = useTheme();

  return (
    <ProjectCardContainer>
      <Link href={project.githubUrl} target="_blank">
        <ProjectCardImage>
          <Image
            src={project.image.url}
            alt={project.name}
            width={296}
            height={180}
            placeholder="blur"
            blurDataURL={(project.image as any).base64}
          />
        </ProjectCardImage>
      </Link>

      <ProjectCardContent>
        <ProjectCardHead>
          <Heading size="h4" as="h3">
            {project.name}
          </Heading>
          <div>
            <IconButton as={Link} href={project.githubUrl} target="_blank">
              <GithubLogo />
            </IconButton>
            {project.websiteUrl && (
              <IconButton as={Link} href={project.websiteUrl} target="_blank">
                <ArrowSquareOut />
              </IconButton>
            )}
          </div>
        </ProjectCardHead>

        <ProjectCardDescription>{project.description}</ProjectCardDescription>

        <TechsCarousel>
          {project.technologies.map((tech) => (
            <TechSlider key={tech.id} style={{ width: "fit-content" }}>
              <Chip
                highlightColor={tech.highlightColor}
                as={Link}
                href={tech.websiteUrl}
                target="_blank"
              >
                <Image
                  src={
                    theme === "dark" ? tech.darkImage.url : tech.lightImage.url
                  }
                  alt={tech.name}
                  width={18}
                  height={18}
                />
                {tech.name}
              </Chip>
            </TechSlider>
          ))}
        </TechsCarousel>
      </ProjectCardContent>
    </ProjectCardContainer>
  );
};
