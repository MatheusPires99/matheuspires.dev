import Image from "next/future/image";

import { VariantProps } from "@stitches/react";

import { Link } from "@/components/link";
import { RichText } from "@/components/rich-text";

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
  role: string;
  description: string;
  startsAt: string;
  endsAt: string;
  company: {
    name: string;
    websiteUrl: string;
    logo: string;
  };
};

export const WorkExperience = ({
  role,
  description,
  startsAt,
  endsAt,
  company,
  ...props
}: WorkExperienceProps) => {
  return (
    <WorkExperienceContainer {...props}>
      <CompanyImage>
        <Image src={company.logo} alt={company.name} width={40} height={40} />
      </CompanyImage>

      <WorkContent>
        <RoleAndCompany>
          <strong>{role}</strong>
          <Link variant="hightlight" href={company.websiteUrl} target="_blank">
            @ {company.name}
          </Link>
        </RoleAndCompany>
        <WorkPeriod>
          {startsAt} - {endsAt || "present"}
        </WorkPeriod>
        <RichText
          css={{ marginTop: "1rem" }}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </WorkContent>
    </WorkExperienceContainer>
  );
};
