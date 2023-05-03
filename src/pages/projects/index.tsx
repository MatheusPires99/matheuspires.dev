import { GetStaticProps } from "next";
import { useState } from "react";

import { MagnifyingGlass } from "phosphor-react";
import { getPlaiceholder } from "plaiceholder";

import { ProjectCard } from "@/components/project-card";
import { SEO } from "@/components/seo";
import { ProjectsQuery } from "@/generated/graphql";
import { getProjects } from "@/services/cms-service";

const REVALIDATE_TIME_IN_SECONDS = 60 * 60; // 1 hour

type ProjectsProps = {
  projects: ProjectsQuery["projects"];
};

const Projects = ({ projects }: ProjectsProps) => {
  const [searchText, setSearchText] = useState("");

  const filteredProjects =
    searchText.length > 0
      ? projects.filter((project) =>
          project.name.toLowerCase().includes(searchText.toLowerCase()),
        )
      : projects;

  return (
    <>
      <SEO title="Projects | Matheus Pires" />

      <div className="flex flex-col gap-8 pb-14 pt-8 sm:gap-10 sm:pb-26 sm:pt-16">
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
          Projects
        </h1>

        <div className="relative w-full">
          <div className="absolute left-4 top-1/2 flex -translate-y-1/2 items-center justify-center">
            <MagnifyingGlass className="h-5 w-5 text-accent-placeholder" />
          </div>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search projects..."
            className="h-12 w-full rounded border border-accent-border bg-transparent pl-11 pr-4 text-text-base placeholder:text-accent-placeholder focus:ring-2 focus:ring-border-hover focus-visible:outline-none"
          />
        </div>

        {filteredProjects.length > 0 ? (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 [&>a]:mx-auto">
            {filteredProjects.map((project) => (
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
          </ul>
        ) : (
          <div className="flex flex-col gap-2">
            <strong className="text-2xl font-semibold">
              No result found for "{searchText}".
            </strong>
            <span>Try again with a different keyword.</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects();

  const projectsWithImageBlurHash = await Promise.all(
    projects.map(async (project) => {
      const { base64 } = await getPlaiceholder(project.images[0].url, {
        size: 24,
      });

      return {
        ...project,
        images: [{ ...project.images[0], blurDataUrl: base64 }],
      };
    }),
  );

  return {
    props: {
      projects: projectsWithImageBlurHash,
    },
    revalidate: REVALIDATE_TIME_IN_SECONDS,
  };
};
