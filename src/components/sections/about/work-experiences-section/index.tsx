import Image from "next/image";

import { Heading } from "@/components/heading";
import { Link } from "@/components/link";
import { RichText } from "@/components/rich-text";
import { Section } from "@/components/section";
import { WorkExperiencesQuery } from "@/generated/graphql";

import {
  WorkExperienceGroup,
  WorkExperience,
  CompanyImage,
  WorkExperienceContent,
  WorkExperiencePeriod,
} from "./styles";

type WorkExperiencesSectionProps = {
  workExperiences: WorkExperiencesQuery["workExperiences"];
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

export const WorkExperiencesSection = ({
  workExperiences,
}: WorkExperiencesSectionProps) => {
  return (
    <Section>
      <Heading
        css={{
          marginBottom: "6.5rem",
          "@mobile": { marginBottom: "4.5rem" },
        }}
      >
        Professional Experience
      </Heading>

      <WorkExperienceGroup>
        {workExperiences.map((workExperience) => (
          <WorkExperience key={workExperience.id}>
            <CompanyImage>
              <Image
                src={workExperience.company!.logo.url}
                alt={workExperience.company!.name}
                width={40}
                height={40}
              />
            </CompanyImage>

            <WorkExperienceContent>
              <Heading
                size="md"
                as="h3"
                css={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                {workExperience.role}
                <Link
                  variant="hightlight"
                  href={workExperience.company!.websiteUrl}
                  target="_blank"
                >
                  @ {workExperience.company!.name}
                </Link>
              </Heading>

              <WorkExperiencePeriod>
                {formatDate(workExperience.startsAt)} -{" "}
                {workExperience.endsAt
                  ? formatDate(workExperience.endsAt)
                  : "present"}
              </WorkExperiencePeriod>

              <RichText
                css={{ marginTop: "1rem" }}
                dangerouslySetInnerHTML={{
                  __html: workExperience.description.html,
                }}
              />
            </WorkExperienceContent>
          </WorkExperience>
        ))}
      </WorkExperienceGroup>
    </Section>
  );
};
