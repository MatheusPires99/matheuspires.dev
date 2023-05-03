import { GetStaticProps } from "next";
import { useState } from "react";

import { MagnifyingGlass } from "phosphor-react";
import { getPlaiceholder } from "plaiceholder";

import { Input } from "@/components/input";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { SEO } from "@/components/seo";
import { ProjectsQuery } from "@/generated/graphql";
import { getProjects } from "@/services/cms-service";
import { styled } from "@/styles";

const REVALIDATE_TIME_IN_SECONDS = 60 * 60; // 1 hour

export const ProjectsGrid = styled("ul", {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "1.5rem",

  "@tablet": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },

  "@mobile": {
    gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  },
});

const NoProjectsFound = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

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

      <Section
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
          "@mobile": { gap: "2rem" },
        }}
        isFirstSection
        as="div"
      >
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
          Projects
        </h1>

        <Input
          preffix={<MagnifyingGlass />}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search projects..."
        />

        {filteredProjects.length > 0 ? (
          <ProjectsGrid>
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
          </ProjectsGrid>
        ) : (
          <NoProjectsFound>
            <strong className="text-2xl font-semibold">
              No result found for "{searchText}".
            </strong>
            <span>Try again with a different keyword.</span>
          </NoProjectsFound>
        )}
      </Section>
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
