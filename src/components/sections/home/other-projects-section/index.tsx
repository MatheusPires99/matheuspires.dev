import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { Link } from "@/components/link";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";

import { OtherProjectsGroup } from "./styles";

export const OtherProjectsSection = () => {
  return (
    <Section
      css={{ paddingTop: "9.5rem", display: "flex", flexDirection: "column" }}
    >
      <Heading size="h3" centered as="h3">
        Other Projects
      </Heading>

      <OtherProjectsGroup>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
      </OtherProjectsGroup>

      <Button
        variant="outline"
        as={Link}
        href="/projects"
        css={{ marginTop: "3.5rem", alignSelf: "center" }}
      >
        View all
      </Button>
    </Section>
  );
};
