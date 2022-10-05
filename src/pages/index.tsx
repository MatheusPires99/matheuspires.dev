import { GetStaticProps } from "next";

import { Divider } from "@/components/divider";
import {
  HeroSection,
  FeaturedProjectsSection,
  OtherProjectsSection,
} from "@/components/sections/home";
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
  const featuredProjects = projects.filter((tech) => tech.isFeatured);
  const otherProjects = projects.filter((tech) => !tech.isFeatured);

  return {
    props: {
      technologies: featuredTechnologies,
      featuredProjects,
      otherProjects,
    },
    revalidate: 60 * 60, // 1 hour
  };
};
