import Image from "next/image";

import { RichText } from "@/components/rich-text";
import { WorkExperiencesQuery } from "@/generated/graphql";

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

      <div className="relative flex flex-col before:absolute before:left-[calc(3.75rem/2)] before:h-full before:w-[2px] before:bg-shape md:gap-8 md:before:left-1/2">
        {workExperiences.map((workExperience) => (
          <div
            key={workExperience.id}
            className="flex items-center gap-6 even:flex-row md:items-start md:gap-0 md:even:flex-row-reverse"
          >
            <div className="z-20 flex h-[3.75rem] w-[3.75rem] shrink-0 items-center justify-center rounded-full bg-shape md:absolute md:left-1/2 md:ml-[calc(-3.75rem/2)]">
              <Image
                src={workExperience.company!.logo.url}
                alt={workExperience.company!.name}
                width={40}
                height={40}
                className="h-10 w-10"
              />
            </div>

            <div className="flex w-full flex-col md:w-[45%]">
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

              <span className="mt-2 block font-mono text-accent-text">
                {formatDate(workExperience.startsAt)} -{" "}
                {workExperience.endsAt
                  ? formatDate(workExperience.endsAt)
                  : "present"}
              </span>

              <RichText
                css={{ marginTop: "1rem" }}
                dangerouslySetInnerHTML={{
                  __html: workExperience.description.html,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
