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
      <Link href={githubUrl} target="_blank">
        <ProjectCardImage>
          <Image
            src={image.url}
            alt={name}
            width={296}
            height={180}
            placeholder="blur"
            blurDataURL={(image as any).base64}
          />
        </ProjectCardImage>
      </Link>

      <ProjectCardContent>
        <ProjectCardHead>
          <Heading size="h4" as="h3">
            {name}
          </Heading>
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
        </ProjectCardHead>

        <ProjectCardDescription>{description}</ProjectCardDescription>

        <TechsCarousel>
          {technologies.map((tech) => (
            <TechSlider key={tech.id}>
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
            </TechSlider>
          ))}
        </TechsCarousel>
      </ProjectCardContent>
    </ProjectCardContainer>
  );
};
