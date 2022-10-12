import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { Link } from "@/components/link";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { ProjectsQuery } from "@/generated/graphql";

import { OtherProjectsGroup } from "./styles";

const MAX_NUMBER_OF_PROJECTS = 6;

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
      <Heading size="lg" as="h3" centered>
        Other Projects
      </Heading>

      <OtherProjectsGroup>
        {otherProjects.slice(0, MAX_NUMBER_OF_PROJECTS).map((project) => (
          <li key={project.id}>
            <ProjectCard
              name={project.name}
              description={project.description}
              image={project.image}
              githubUrl={project.githubUrl}
              websiteUrl={project.websiteUrl}
              technologies={project.technologies}
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
