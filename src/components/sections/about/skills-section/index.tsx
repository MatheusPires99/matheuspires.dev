import Image from "next/future/image";

import { Chip, ChipsGroup } from "@/components/chip";
import { Heading } from "@/components/heading";
import { Link } from "@/components/link";
import { Section } from "@/components/section";
import { TechnologiesQuery } from "@/generated/graphql";

type SkillsSectionProps = {
  technologies: TechnologiesQuery["technologies"];
};

export const SkillsSection = ({ technologies }: SkillsSectionProps) => {
  return (
    <Section>
      <Heading
        css={{
          marginBottom: "2.5rem",
          "@tablet": { marginBottom: "1.5rem" },
        }}
      >
        Skills
      </Heading>
      <ChipsGroup>
        {technologies.map((tech) => (
          <li key={tech.id}>
            <Chip
              highlightColor={tech.highlightColor}
              as={Link}
              href={tech.websiteUrl}
              target="_blank"
            >
              <Image
                src={tech.image.url}
                alt={tech.name}
                width={18}
                height={18}
              />
              {tech.name}
            </Chip>
          </li>
        ))}
      </ChipsGroup>
    </Section>
  );
};
