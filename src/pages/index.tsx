import Image from "next/future/image";
import Link from "next/link";

import { FileTs } from "phosphor-react";

import { Button } from "@/components/button";
import { ChipsGroup, Chip } from "@/components/chip";
import { Divider } from "@/components/divider";
import { FeaturedProject } from "@/components/featured-project";
import { Heading } from "@/components/heading";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { styled } from "@/styles";

const HeroSection = styled(Section, {
  display: "flex",
  alignItems: "center",
  gap: 84,
});

const HeroImage = styled(Image, {
  borderRadius: "$sm",
});

const HeroContent = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const Introduction = styled("div", {
  marginBottom: "1rem",

  display: "flex",
  flexDirection: "column",

  span: {
    fontFamily: "$mono",
    fontSize: "$lg",
    color: "$accent-text",
    marginBottom: "0.5rem",
  },

  p: {
    fontSize: "$lg",
    color: "$neutral-text",
    marginTop: "1.5rem",
  },
});

const ProjectsSection = styled(Section, {});

const FeaturedProjectsGroup = styled("div", {
  marginTop: "3.5rem",

  display: "flex",
  flexDirection: "column",
  gap: "6.5rem",
});

const OtherProjects = styled("div", {
  marginTop: "9.5rem",

  display: "flex",
  flexDirection: "column",
});

const OtherProjectsGroup = styled("ul", {
  marginTop: "3.5rem",

  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(296px, 1fr))",
  gap: "1.5rem",
});

const Home = () => {
  return (
    <main>
      <HeroSection>
        <HeroImage
          src="/me.jpg"
          alt="Matheus's photo"
          width={298}
          height={298}
        />

        <HeroContent>
          <Introduction>
            <span>Hi, my name is</span>
            <Heading>Matheus Pires</Heading>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </Introduction>

          <ChipsGroup>
            <li>
              <Link href="https://google.com" target="_blank">
                <Chip highlightColor="green">
                  <FileTs />
                  TypeScript
                </Chip>
              </Link>
            </li>
            <li>
              <Link href="https://google.com" target="_blank">
                <Chip highlightColor="yellow">
                  <FileTs />
                  HTML
                </Chip>
              </Link>
            </li>
            <li>
              <Link href="https://google.com" target="_blank">
                <Chip highlightColor="pink">
                  <FileTs />
                  JavaScript
                </Chip>
              </Link>
            </li>
            <li>
              <Link href="https://google.com" target="_blank">
                <Chip highlightColor="blue">
                  <FileTs />
                  CSS
                </Chip>
              </Link>
            </li>
            <li>
              <Link href="https://google.com" target="_blank">
                <Chip highlightColor="red">
                  <FileTs />
                  Vue
                </Chip>
              </Link>
            </li>
          </ChipsGroup>
        </HeroContent>
      </HeroSection>

      <Divider />

      <ProjectsSection>
        <Heading size="h2">Featured Projects</Heading>

        <FeaturedProjectsGroup>
          <FeaturedProject direction="left" />
          <FeaturedProject direction="right" />
        </FeaturedProjectsGroup>

        <OtherProjects>
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
        </OtherProjects>
      </ProjectsSection>
    </main>
  );
};

export default Home;
