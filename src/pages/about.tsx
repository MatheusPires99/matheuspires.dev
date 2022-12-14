import { GetStaticProps } from "next";

import { Divider } from "@/components/divider";
import {
  BioSection,
  SkillsSection,
  WorkExperiencesSection,
} from "@/components/sections/about";
import { SEO } from "@/components/seo";
import { TechnologiesQuery, WorkExperiencesQuery } from "@/generated/graphql";
import { getTechnologies, getWorkExperiences } from "@/services/cms-service";

const REVALIDATE_TIME_IN_SECONDS = 60 * 60 * 3; // 3 hour

type AboutProps = {
  technologies: TechnologiesQuery["technologies"];
  workExperiences: WorkExperiencesQuery["workExperiences"];
};

const About = ({ technologies, workExperiences }: AboutProps) => {
  return (
    <>
      <SEO title="About | Matheus Pires" />

      <BioSection />
      <Divider />
      <SkillsSection technologies={technologies} />
      <Divider />
      <WorkExperiencesSection workExperiences={workExperiences} />
    </>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  const [technologies, workExperiences] = await Promise.all([
    getTechnologies(),
    getWorkExperiences(),
  ]);

  return {
    props: {
      technologies,
      workExperiences,
    },
    revalidate: REVALIDATE_TIME_IN_SECONDS,
  };
};
