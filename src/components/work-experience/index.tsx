import Image from "next/future/image";

import { VariantProps } from "@stitches/react";

import { Link } from "@/components/link";
import { RichText } from "@/components/rich-text";
import { WorkExperiencesQuery } from "@/generated/graphql";

import {
  WorkExperienceContainer,
  CompanyImage,
  WorkContent,
  RoleAndCompany,
  WorkPeriod,
} from "./styles";

type WorkExperienceProps = Required<
  VariantProps<typeof WorkExperienceContainer>
> & {
  workExperience: Pick<
    WorkExperiencesQuery["workExperiences"][0],
    "role" | "description" | "startsAt" | "endsAt" | "company"
  >;
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

export const WorkExperience = ({
  direction,
  workExperience,
}: WorkExperienceProps) => {
  return (
    <WorkExperienceContainer direction={direction}>
      <CompanyImage>
        <Image
          src={workExperience.company!.logo.url}
          alt={workExperience.company!.name}
          width={40}
          height={40}
        />
      </CompanyImage>

      <WorkContent>
        <RoleAndCompany>
          <strong>{workExperience.role}</strong>
          <Link
            variant="hightlight"
            href={workExperience.company!.websiteUrl}
            target="_blank"
          >
            @ {workExperience.company!.name}
          </Link>
        </RoleAndCompany>
        <WorkPeriod>
          {formatDate(workExperience.startsAt)} -{" "}
          {workExperience.endsAt
            ? formatDate(workExperience.endsAt)
            : "present"}
        </WorkPeriod>
        <RichText
          css={{ marginTop: "1rem" }}
          dangerouslySetInnerHTML={{ __html: workExperience.description.html }}
        />
      </WorkContent>
    </WorkExperienceContainer>
  );
};
