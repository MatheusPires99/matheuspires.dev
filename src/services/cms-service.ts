import {
  ProjectDetailsDocument,
  ProjectDetailsQuery,
  ProjectsDocument,
  ProjectsQuery,
  TechnologiesDocument,
  TechnologiesQuery,
  WorkExperiencesDocument,
  WorkExperiencesQuery,
} from "@/generated/graphql";
import { client } from "@/lib/apollo-client";

export const getTechnologies = async () => {
  const { data } = await client.query<TechnologiesQuery>({
    query: TechnologiesDocument,
  });

  return data.technologies;
};

export const getWorkExperiences = async () => {
  const { data } = await client.query<WorkExperiencesQuery>({
    query: WorkExperiencesDocument,
  });

  return data.workExperiences;
};

export const getProjects = async () => {
  const { data } = await client.query<ProjectsQuery>({
    query: ProjectsDocument,
  });

  return data.projects;
};

export const getProjectBySlug = async (slug: string) => {
  const { data } = await client.query<ProjectDetailsQuery>({
    query: ProjectDetailsDocument,
    variables: {
      slug,
    },
  });

  return data.project;
};
