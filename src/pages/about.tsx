import { GetStaticProps } from "next";

import { Divider } from "@/components/divider";
import {
  BioSection,
  SkillsSection,
  WorkExperiencesSection,
} from "@/components/sections/about";
import { SEO } from "@/components/seo";
import { TechnologiesQuery, WorkExperiencesQuery } from "@/generated/graphql";
import { cmsService } from "@/services";

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
