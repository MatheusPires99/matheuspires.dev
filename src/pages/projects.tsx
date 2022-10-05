import { GetStaticProps } from "next";
import { ChangeEvent, useState } from "react";

import { MagnifyingGlass } from "phosphor-react";

import { Heading } from "@/components/heading";
import { Input } from "@/components/input";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { ProjectsQuery } from "@/generated/graphql";
import { cmsService } from "@/services";
import { styled } from "@/styles";

export const ProjectsGrid = styled("ul", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1.5rem",
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
      <Section
        css={{ display: "flex", flexDirection: "column", gap: "4rem" }}
        isFirstSection
        as="div"
      >
        <Heading size="h2">Projects</Heading>

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
                  name={project.name}
                  description={project.description}
                  image={project.image}
                  githubUrl={project.githubUrl}
                  websiteUrl={project.websiteUrl}
                  technologies={project.technologies}
                />
              </li>
            ))}
          </ProjectsGrid>
        ) : (
          <NoProjectsFound>
            <Heading size="h4" as="h4">
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

  return {
    props: {
      projects,
    },
    revalidate: 60 * 60, // 1 hour
  };
};
