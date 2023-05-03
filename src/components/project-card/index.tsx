import Image from "next/image";

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
      <ProjectCardContainer className="group">
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
          <strong className="text-xl font-semibold text-text-base transition group-hover:text-text-contrast">
            {name}
          </strong>

          <ProjectCardDescription>{description}</ProjectCardDescription>
        </ProjectCardContent>
      </ProjectCardContainer>
    </Link>
  );
};
