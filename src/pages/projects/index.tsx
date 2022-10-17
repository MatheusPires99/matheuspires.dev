import { GetStaticProps } from "next";
import { ChangeEvent, useState } from "react";

import { MagnifyingGlass } from "phosphor-react";
import { getPlaiceholder } from "plaiceholder";

import { Heading } from "@/components/heading";
import { Input } from "@/components/input";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { SEO } from "@/components/seo";
import { ProjectsQuery } from "@/generated/graphql";
import { cmsService } from "@/services";
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
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilterList = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearchText(value);

    const filteredProjectsByValue = projects.filter((project) =>
      project.name.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredProjects(filteredProjectsByValue);
  };

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
        <Heading as="h1">Projects</Heading>

        <Input
          preffix={<MagnifyingGlass />}
          value={searchText}
          onChange={handleFilterList}
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
                  images={project.images}
                />
              </li>
            ))}
          </ProjectsGrid>
        ) : (
          <NoProjectsFound>
            <Heading size="md" as="h4">
              No result found for "{searchText}".
            </Heading>
            <span>Try again with a different keyword.</span>
          </NoProjectsFound>
        )}
      </Section>
    </>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const projects = await cmsService.getProjects();

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
