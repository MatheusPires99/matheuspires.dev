import { FeaturedProject } from "@/components/featured-project";
import { Heading } from "@/components/heading";
import { Section } from "@/components/section";
import { ProjectsQuery } from "@/generated/graphql";

import { FeaturedProjectsGroup } from "./styles";

type FeaturedProjectSectionProps = {
  featuredProjects: ProjectsQuery["projects"];
};

export const FeaturedProjectsSection = ({
  featuredProjects,
}: FeaturedProjectSectionProps) => {
  return (
    <Section css={{ paddingBottom: 0 }}>
      <Heading
        size={{
          "@initial": "h2",
          "@mobile": "h3",
        }}
        as="h2"
      >
        Featured Projects
      </Heading>

      <FeaturedProjectsGroup>
        {featuredProjects.map((project, index) => (
          <FeaturedProject
            key={project.id}
            direction={index % 2 === 0 ? "right" : "left"}
            project={{
              name: project.name,
              description: project.description,
              image: project.image,
              githubUrl: project.githubUrl,
              websiteUrl: project.websiteUrl,
              technologies: project.technologies,
            }}
          />
        ))}
      </FeaturedProjectsGroup>
    </Section>
  );
};
