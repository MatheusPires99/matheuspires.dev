import { GetStaticProps } from "next";

import { getPlaiceholder } from "plaiceholder";

import { Divider } from "@/components/divider";
import {
  HeroSection,
  FeaturedProjectsSection,
  OtherProjectsSection,
} from "@/components/sections/home";
import { SEO } from "@/components/seo";
import { ProjectsQuery, TechnologiesQuery } from "@/generated/graphql";
import { getTechnologies, getProjects } from "@/services/cms-service";

const REVALIDATE_TIME_IN_SECONDS = 60 * 60; // 1 hour

type HomeProps = {
  technologies: TechnologiesQuery["technologies"];
  featuredProjects: ProjectsQuery["projects"];
  otherProjects: ProjectsQuery["projects"];
};

const Home = ({ technologies, featuredProjects, otherProjects }: HomeProps) => {
  return (
    <>
      <SEO />

      <HeroSection technologies={technologies} />
      <Divider />
      <FeaturedProjectsSection featuredProjects={featuredProjects} />
      <OtherProjectsSection otherProjects={otherProjects} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const [technologies, projects] = await Promise.all([
    getTechnologies(),
    getProjects(),
  ]);

  const featuredTechnologies = technologies.filter((tech) => tech.isFeatured);

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

  const featuredProjects = projectsWithImageBlurHash.filter(
    (tech) => tech.isFeatured,
  );
  const otherProjects = projectsWithImageBlurHash.filter(
    (tech) => !tech.isFeatured,
  );

  return {
    props: {
      technologies: featuredTechnologies,
      featuredProjects,
      otherProjects,
    },
    revalidate: REVALIDATE_TIME_IN_SECONDS,
  };
};
