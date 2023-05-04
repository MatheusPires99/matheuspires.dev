import { Metadata } from "next";

import { getPlaiceholder } from "plaiceholder";

import { ProjectCard } from "@/components/project-card";
import { getProjects } from "@/services/cms-service";

export const metadata: Metadata = {
  title: "Projects",
};

export const revalidate = 3600; // 1 hour

type ProjectsPageProps = {
  searchParams: {
    search: string;
  };
};

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const search = searchParams.search || "";

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

  const filteredProjects =
    search.length > 0
      ? projectsWithImageBlurHash.filter((project) =>
          project.name.toLowerCase().includes(search.toLowerCase()),
        )
      : projectsWithImageBlurHash;

  return (
    <div className="flex flex-col gap-8 pb-14 pt-8 sm:gap-10 sm:pb-26 sm:pt-16">
      <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
        Projects
      </h1>

      {/* <SearchInput /> */}

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 [&>a]:mx-auto">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              slug={project.slug}
              name={project.name}
              description={project.description}
              image={{
                url: project.images[0].url,
                blurDataUrl: project.images[0].blurDataUrl,
              }}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <strong className="text-2xl font-semibold">
            No result found for "{search}".
          </strong>
          <span>Try again with a different keyword.</span>
        </div>
      )}
    </div>
  );
}
