import Image from "next/future/image";

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

type WorkExperienceProps = Pick<
  WorkExperiencesQuery["workExperiences"][0],
  "role" | "description" | "startsAt" | "endsAt" | "company"
>;

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

export const WorkExperience = ({
  role,
  description,
  startsAt,
  endsAt,
  company,
}: WorkExperienceProps) => {
  return (
    <WorkExperienceContainer>
      <CompanyImage>
        <Image
          src={company!.logo.url}
          alt={company!.name}
          width={40}
          height={40}
        />
      </CompanyImage>

      <WorkContent>
        <RoleAndCompany>
          <strong>{role}</strong>
          <Link variant="hightlight" href={company!.websiteUrl} target="_blank">
            @ {company!.name}
          </Link>
        </RoleAndCompany>
        <WorkPeriod>
          {formatDate(startsAt)} - {endsAt ? formatDate(endsAt) : "present"}
        </WorkPeriod>
        <RichText
          css={{ marginTop: "1rem" }}
          dangerouslySetInnerHTML={{ __html: description.html }}
        />
      </WorkContent>
    </WorkExperienceContainer>
  );
};
