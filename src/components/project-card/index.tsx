import Image from "next/future/image";

import { ArrowSquareOut } from "phosphor-react";

import { Chip } from "@/components/chip";
import { IconButton } from "@/components/icon-button";
import { GithubLogo } from "@/components/icons";
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
            fill
            placeholder="blur"
            blurDataURL={(image as any).base64}
          />
        </ProjectCardImage>
      </Link>

      <ProjectCardContent>
        <ProjectCardHeader>
          <Heading size="sm" as="strong">
            {name}
          </Heading>
          <div>
            <IconButton
              size="sm"
              as={Link}
              href={githubUrl}
              target="_blank"
              aria-label="GitHub"
            >
              <GithubLogo />
            </IconButton>
            {websiteUrl && (
              <IconButton
                size="sm"
                as={Link}
                href={websiteUrl}
                target="_blank"
                aria-label="Website"
              >
                <ArrowSquareOut />
              </IconButton>
            )}
          </div>
        </ProjectCardHeader>

        <ProjectCardDescription>{description}</ProjectCardDescription>

        <TechsCarousel>
          {technologies.map((tech) => (
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
