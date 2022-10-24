import { GetStaticPaths, GetStaticProps } from "next";

import { getPlaiceholder } from "plaiceholder";

import {
  ProjectHeaderSection,
  ProjectImagesSection,
} from "@/components/sections/project-details";
import { SEO } from "@/components/seo";
import { Technology } from "@/generated/graphql";
import { getProjectBySlug, getProjects } from "@/services/cms-service";

const REVALIDATE_TIME_IN_SECONDS = 60 * 60; // 1 hour

type ProjectDetailsProps = {
  project: {
    name: string;
    title: string;
    description: string;
    githubUrl: string;
    websiteUrl?: string;
    images: {
      url: string;
      blurDataUrl: string;
      title: string;
      description: string;
    }[];
    technologies: Pick<
      Technology,
      "id" | "name" | "image" | "websiteUrl" | "highlightColor"
    >[];
  };
};

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <>
      <SEO
        title={`${project.name} | Matheus Pires`}
        description={project.description}
        image={project.images[0].url}
      />

      <ProjectHeaderSection
        name={project.name}
        coverImage={project.images[0]}
        technologies={project.technologies}
        githubUrl={project.githubUrl}
        websiteUrl={project.websiteUrl}
      />
      <ProjectImagesSection
        title={project.title}
        description={project.description}
        images={project.images}
      />
    </>
  );
};

export default ProjectDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getProjects();

  const paths = projects.map((project) => ({ params: { slug: project.slug } }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string;

  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  const imagesWithBlurDataUrl = await Promise.all(
    project.images.map(async (image) => {
      const { base64 } = await getPlaiceholder(image.url, { size: 24 });

      return {
        ...image,
        blurDataUrl: base64,
      };
    }),
  );

  return {
    props: {
      project: {
        ...project,
        images: imagesWithBlurDataUrl,
      },
    },
    revalidate: REVALIDATE_TIME_IN_SECONDS,
  };
};
