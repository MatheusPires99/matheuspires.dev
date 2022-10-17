import Image from "next/future/image";

import { Heading } from "@/components/heading";
import { Link } from "@/components/link";
import { ProjectsQuery } from "@/generated/graphql";

import {
  ProjectCardContainer,
  ProjectCardImageContainer,
  ProjectCardContent,
  ProjectCardDescription,
} from "./styles";

type ProjectCardProps = Pick<
  ProjectsQuery["projects"][0],
  "slug" | "name" | "description" | "images"
>;

export const ProjectCard = ({
  slug,
  name,
  description,
  images,
}: ProjectCardProps) => {
  return (
    <Link href={`/projects/${slug}`}>
      <ProjectCardContainer>
        <ProjectCardImageContainer>
          <Image
            src={images[0].url}
            alt={name}
            fill
            placeholder="blur"
            blurDataURL={(images[0] as any).blurDataUrl}
          />
        </ProjectCardImageContainer>

        <ProjectCardContent>
          <Heading size="sm" as="strong">
            {name}
          </Heading>

          <ProjectCardDescription>{description}</ProjectCardDescription>
        </ProjectCardContent>
      </ProjectCardContainer>
    </Link>
  );
};
