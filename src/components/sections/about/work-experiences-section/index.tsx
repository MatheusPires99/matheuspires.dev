import Image from "next/image";

import { RichText } from "@/components/rich-text";
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
    <section className="py-14 sm:py-26">
      <h2 className="mb-18 text-3xl font-semibold leading-tight sm:mb-26 sm:text-4xl">
        Professional Experience
      </h2>

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
              <h3 className="flex flex-wrap items-center gap-2 text-2xl font-semibold leading-tight">
                {workExperience.role}
                <a
                  href={workExperience.company!.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="relative font-semibold text-text-contrast hover:before:absolute hover:before:bottom-0 hover:before:h-px hover:before:w-full hover:before:bg-text-contrast"
                >
                  @ {workExperience.company!.name}
                </a>
              </h3>

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
    </section>
  );
};
