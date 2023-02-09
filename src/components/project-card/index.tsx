import Image from "next/image";

import { Heading } from "@/components/heading";
import { Link } from "@/components/link";

import {
  ProjectCardContainer,
  ProjectCardImageContainer,
  ProjectCardContent,
  ProjectCardDescription,
} from "./styles";

type ProjectCardProps = {
  slug: string;
  name: string;
  description: string;
  image: {
    url: string;
    blurDataUrl: string;
  };
};

export const ProjectCard = ({
  slug,
  name,
  description,
  image,
}: ProjectCardProps) => {
  return (
    <Link href={`/projects/${slug}`}>
      <ProjectCardContainer>
        <ProjectCardImageContainer>
          <Image
            src={image.url}
            alt={name}
            fill
            placeholder="blur"
            blurDataURL={image.blurDataUrl}
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
