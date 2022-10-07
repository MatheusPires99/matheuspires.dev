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
import { cmsService } from "@/services";

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
    cmsService.getTechnologies(),
    cmsService.getProjects(),
  ]);

  const featuredTechnologies = technologies.filter((tech) => tech.isFeatured);

  const projectsWithImageBlurHash = await Promise.all(
    projects.map(async (project) => {
      const { base64 } = await getPlaiceholder(project.image.url, {
        size: 24,
      });

      return {
        ...project,
        image: {
          ...project.image,
          base64,
        },
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
    revalidate: 60 * 60, // 1 hour
  };
};
