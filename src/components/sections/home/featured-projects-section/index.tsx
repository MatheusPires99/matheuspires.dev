import { FeaturedProject } from "@/components/featured-project";
import { Heading } from "@/components/heading";
import { Section } from "@/components/section";

import { FeaturedProjectsGroup } from "./styles";

export const FeaturedProjectSection = () => {
  return (
    <Section css={{ paddingBottom: 0 }}>
      <Heading size="h2">Featured Projects</Heading>

      <FeaturedProjectsGroup>
        <FeaturedProject direction="left" />
        <FeaturedProject direction="right" />
      </FeaturedProjectsGroup>
    </Section>
  );
};
