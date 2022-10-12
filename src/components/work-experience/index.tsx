import Image from "next/future/image";

import { Heading } from "@/components/heading";
import { Link } from "@/components/link";
import { RichText } from "@/components/rich-text";
import { WorkExperiencesQuery } from "@/generated/graphql";

import {
  WorkExperienceContainer,
  CompanyImage,
  WorkContent,
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
          {role}
          <Link variant="hightlight" href={company!.websiteUrl} target="_blank">
            @ {company!.name}
          </Link>
        </Heading>
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
