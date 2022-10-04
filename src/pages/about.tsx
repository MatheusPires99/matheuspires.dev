import { GetStaticProps, InferGetStaticPropsType } from "next";

import { Container } from "@/components/container";
import { Divider } from "@/components/divider";
import {
  BioSection,
  SkillsSection,
  WorkExperiencesSection,
} from "@/components/sections/about";
import { TechnologiesQuery, WorkExperiencesQuery } from "@/generated/graphql";
import { cmsService } from "@/services";

export const getStaticProps: GetStaticProps<
  TechnologiesQuery & WorkExperiencesQuery
> = async () => {
  const [technologies, workExperiences] = await Promise.all([
    cmsService.getTechnologies(),
    cmsService.getWorkExperiences(),
  ]);

  return {
    props: {
      technologies,
      workExperiences,
    },
    revalidate: 60 * 60, // 1 hour
  };
};

type AboutProps = InferGetStaticPropsType<typeof getStaticProps>;

const About = ({ technologies, workExperiences }: AboutProps) => {
  return (
    <Container as="main">
      <BioSection />
      <Divider />
      <SkillsSection technologies={technologies} />
      <Divider />
      <WorkExperiencesSection workExperiences={workExperiences} />
    </Container>
  );
};

export default About;
