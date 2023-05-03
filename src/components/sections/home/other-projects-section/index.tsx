import { Button } from "@/components/button";
import { Link } from "@/components/link";
import { ProjectCard } from "@/components/project-card";
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
    <section className="flex flex-col py-14 sm:pb-26 sm:pt-36">
      <h3 className="text-center text-2xl font-semibold sm:text-3xl">
        Other Projects
      </h3>

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

      <Button variant="outline" asChild className="mt-14 self-center">
        <Link href="/projects">View all</Link>
      </Button>
    </section>
  );
};
