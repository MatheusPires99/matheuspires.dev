import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { Link } from "@/components/link";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { ProjectsQuery } from "@/generated/graphql";

import { OtherProjectsGroup } from "./styles";

const NUMBER_OF_PROJECTS_TO_DISPLAY = 6;

type OtherProjectsSectionProps = {
  otherProjects: ProjectsQuery["projects"];
};

export const OtherProjectsSection = ({
  otherProjects,
}: OtherProjectsSectionProps) => {
  return (
    <Section
      css={{
        paddingTop: "9.5rem",
        display: "flex",
        flexDirection: "column",

        "@mobile": {
          paddingTop: "3.5rem",
        },
      }}
    >
      <Heading size="xl" as="h3" centered>
        Other Projects
      </Heading>

      <OtherProjectsGroup>
        {otherProjects
          .slice(0, NUMBER_OF_PROJECTS_TO_DISPLAY)
          .map((project) => (
            <li key={project.id}>
              <ProjectCard
                slug={project.slug}
                name={project.name}
                description={project.description}
                image={{
                  url: project.images[0].url,
                  blurDataUrl: (project.images[0] as any).blurDataUrl,
                }}
              />
            </li>
          ))}
      </OtherProjectsGroup>

      <Button
        variant="outline"
        as={Link}
        href="/projects"
        css={{ marginTop: "3.5rem", alignSelf: "center" }}
      >
        View all
      </Button>
    </Section>
  );
};
