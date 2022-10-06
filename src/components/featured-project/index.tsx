import Image from "next/future/image";

import { VariantProps } from "@stitches/react";
import { ArrowSquareOut } from "phosphor-react";

import { GithubLogo } from "@/assets/icons/github-logo";
import { Chip, ChipsGroup } from "@/components/chip";
import { Heading } from "@/components/heading";
import { IconButton } from "@/components/icon-button";
import { Link } from "@/components/link";
import { ProjectsQuery } from "@/generated/graphql";

import {
  FeaturedProjectContainer,
  ProjectImageContainer,
  ProjectContent,
  ProjectDesription,
  ProjectLinks,
} from "./styles";

type FeaturedProjectProps = Required<
  VariantProps<typeof FeaturedProjectContainer>
> &
  Pick<
    ProjectsQuery["projects"][0],
    | "name"
    | "description"
    | "image"
    | "githubUrl"
    | "websiteUrl"
    | "technologies"
  >;

export const FeaturedProject = ({
  direction,
  name,
  description,
  image,
  githubUrl,
  websiteUrl,
  technologies,
}: FeaturedProjectProps) => {
  return (
    <FeaturedProjectContainer direction={direction}>
      <Link href={githubUrl} target="_blank">
        <ProjectImageContainer>
          <Image
            src={image.url}
            alt={name}
            fill
            placeholder="blur"
            blurDataURL={(image as any).base64}
          />
        </ProjectImageContainer>
      </Link>

      <ProjectContent direction={direction}>
        <Heading size="h3" as="h3">
          <Link variant="primary" href="">
            {name}
          </Link>
        </Heading>

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
        <ProjectDesription>{description}</ProjectDesription>

        <ProjectLinks>
          <IconButton as={Link} href={githubUrl} target="_blank">
            <GithubLogo />
          </IconButton>
          {websiteUrl && (
            <IconButton as={Link} href={websiteUrl} target="_blank">
              <ArrowSquareOut />
            </IconButton>
          )}
        </ProjectLinks>
      </ProjectContent>
    </FeaturedProjectContainer>
  );
};
