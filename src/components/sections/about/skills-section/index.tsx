import Image from "next/image";

import { Chip, ChipsGroup } from "@/components/chip";
import { Link } from "@/components/link";
import { Section } from "@/components/section";
import { TechnologiesQuery } from "@/generated/graphql";

type SkillsSectionProps = {
  technologies: TechnologiesQuery["technologies"];
};

export const SkillsSection = ({ technologies }: SkillsSectionProps) => {
  return (
    <Section>
      <h2 className="mb-6 text-3xl font-semibold leading-tight sm:text-4xl md:mb-10">
        Skills
      </h2>
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
