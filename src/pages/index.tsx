import { GetStaticProps } from "next";

import { Container } from "@/components/container";
import { Divider } from "@/components/divider";
import {
  FeaturedProjectSection,
  HeroSection,
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
    <Container as="main">
      <HeroSection technologies={technologies} />
      <Divider />
      <FeaturedProjectSection featuredProjects={featuredProjects} />
      <OtherProjectsSection otherProjects={otherProjects} />
    </Container>
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
