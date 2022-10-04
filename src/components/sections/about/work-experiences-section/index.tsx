import { Heading } from "@/components/heading";
import { Section } from "@/components/section";
import { WorkExperience } from "@/components/work-experience";
import { WorkExperiencesQuery } from "@/generated/graphql";

import { WorkExperienceGroup } from "./styles";

type WorkExperiencesSectionProps = {
  workExperiences: WorkExperiencesQuery["workExperiences"];
};

export const WorkExperiencesSection = ({
  workExperiences,
}: WorkExperiencesSectionProps) => {
  return (
    <Section>
      <Heading size="h2" as="h2" css={{ marginBottom: "6.5rem" }}>
        Professional Experience
      </Heading>

      <WorkExperienceGroup>
        {workExperiences.map((workExperience, index) => (
          <WorkExperience
            key={workExperience.id}
            direction={index % 2 === 0 ? "left" : "right"}
            role={workExperience.role}
            description={workExperience.description.html}
            startsAt={workExperience.startsAt}
            endsAt={workExperience.endsAt}
            company={{
              name: workExperience.company?.name!,
              websiteUrl: workExperience.company?.websiteUrl!,
              logo: workExperience.company?.logo?.url!,
            }}
          />
        ))}
      </WorkExperienceGroup>
    </Section>
  );
};
