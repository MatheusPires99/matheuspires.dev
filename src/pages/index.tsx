import { GetStaticProps } from "next";

import { Container } from "@/components/container";
import { Divider } from "@/components/divider";
import {
  FeaturedProjectSection,
  HeroSection,
  OtherProjectsSection,
} from "@/components/sections/home";
import { TechnologiesQuery } from "@/generated/graphql";
import { cmsService } from "@/services";

type HomeProps = {
  technologies: TechnologiesQuery["technologies"];
};

const Home = ({ technologies }: HomeProps) => {
  return (
    <Container as="main">
      <HeroSection technologies={technologies} />
      <Divider />
      <FeaturedProjectSection />
      <OtherProjectsSection />
    </Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const technologies = await cmsService.getTechnologies();

  const featuredTechnologiesInOrder = technologies.filter(
    (tech) => tech.isFeatured,
  );

  return {
    props: {
      technologies: featuredTechnologiesInOrder,
    },
  };
};
