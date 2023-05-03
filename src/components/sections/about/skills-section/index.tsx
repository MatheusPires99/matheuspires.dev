import Image from "next/image";

import { Chip } from "@/components/chip";
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
      <div className="flex flex-wrap items-center gap-2">
        {technologies.map((tech) => (
          <Chip key={tech.id} highlightColor={tech.highlightColor} asChild>
            <a href={tech.websiteUrl} target="_blank" rel="noreferrer">
              <Image
                src={tech.image.url}
                alt={tech.name}
                width={18}
                height={18}
              />
              {tech.name}
            </a>
          </Chip>
        ))}
      </div>
    </Section>
  );
};
