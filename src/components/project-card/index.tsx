import Image from "next/future/image";

import { ArrowSquareOut } from "phosphor-react";

import { GithubLogo } from "@/assets/icons/github-logo";
import { Chip } from "@/components/chip";
import { IconButton } from "@/components/icon-button";
import { Link } from "@/components/link";
import { ProjectsQuery } from "@/generated/graphql";

import {
  ProjectCardContainer,
  ProjectCardHeader,
  ProjectCardDescription,
} from "./styles";
import { TechsCarousel, TechSlider } from "./techs-carousel";

type ProjectCardProps = Pick<
  ProjectsQuery["projects"][0],
  "name" | "description" | "image" | "githubUrl" | "websiteUrl" | "technologies"
>;

export const ProjectCard = ({
  name,
  description,
  image,
  githubUrl,
  websiteUrl,
  technologies,
}: ProjectCardProps) => {
  return (
    <ProjectCardContainer>
      <ProjectCardHeader>
        <strong>{name}</strong>
        <div>
          <IconButton as={Link} href={githubUrl} target="_blank">
            <GithubLogo />
          </IconButton>
          {websiteUrl && (
            <IconButton as={Link} href={websiteUrl} target="_blank">
              <ArrowSquareOut />
            </IconButton>
          )}
        </div>
      </ProjectCardHeader>

      <ProjectCardDescription>{description}</ProjectCardDescription>

      <TechsCarousel>
        {technologies.map((tech) => (
          <TechSlider key={tech.id} style={{ width: "fit-content" }}>
            <Link href={tech.websiteUrl} target="_blank">
              <Chip highlightColor={tech.highlightColor}>
                <Image
                  src={tech.image.url}
                  alt={tech.name}
                  width={18}
                  height={18}
                />
                {tech.name}
              </Chip>
            </Link>
          </TechSlider>
        ))}
      </TechsCarousel>
    </ProjectCardContainer>
  );
};
