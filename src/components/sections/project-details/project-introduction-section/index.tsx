import Image from "next/future/image";

import { Button } from "@/components/button";
import { Chip, ChipsGroup } from "@/components/chip";
import { Heading } from "@/components/heading";
import { Link } from "@/components/link";
import { Section } from "@/components/section";
import { Technology } from "@/generated/graphql";

import {
  CoverImage,
  ProjectDetails,
  ProjectTechnologies,
  ActionButtons,
} from "./styles";

type ProjectIntroductionSectionProps = {
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

export const ProjectIntroductionSection = ({
  name,
  coverImage,
  technologies,
  githubUrl,
  websiteUrl,
}: ProjectIntroductionSectionProps) => {
  return (
    <Section isFirstSection>
      <Heading as="h1" css={{ marginBottom: "2rem" }}>
        {name}
      </Heading>

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
          <ChipsGroup>
            {technologies.map((tech) => (
              <li key={tech.id}>
                <Chip
                  highlightColor={tech.highlightColor}
                  as={Link}
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
                </Chip>
              </li>
            ))}
          </ChipsGroup>
        </ProjectTechnologies>
        <ActionButtons>
          {websiteUrl && (
            <Button
              variant="outline"
              size="sm"
              as={Link}
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              css={{ "@tablet": { width: "100%" } }}
            >
              Go to Website
            </Button>
          )}
          <Button
            size="sm"
            as={Link}
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            css={{ "@tablet": { width: "100%" } }}
          >
            Go to Github
          </Button>
        </ActionButtons>
      </ProjectDetails>
    </Section>
  );
};
