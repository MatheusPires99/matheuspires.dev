import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/future/image";

import { Button } from "@/components/button";
import { ChipsGroup, Chip } from "@/components/chip";
import { Container } from "@/components/container";
import { Divider } from "@/components/divider";
import { FeaturedProject } from "@/components/featured-project";
import { Heading } from "@/components/heading";
import { Link } from "@/components/link";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { TechnologiesQuery } from "@/generated/graphql";
import { cmsService } from "@/services";
import { styled } from "@/styles";

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
    color: "$text-contrast",
    marginBottom: "0.5rem",
  },

  p: {
    fontSize: "$lg",
    lineHeight: "1.5",
    color: "$accent-text",
    marginTop: "1.5rem",
  },
});

const CallToActions = styled("div", {
  marginTop: "2rem",

  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

const FeaturedProjectsGroup = styled("div", {
  marginTop: "3.5rem",

  display: "flex",
  flexDirection: "column",
  gap: "6.5rem",
});

const OtherProjectsGroup = styled("ul", {
  marginTop: "3.5rem",

  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(296px, 1fr))",
  gap: "1.5rem",
});

export const getStaticProps: GetStaticProps<TechnologiesQuery> = async () => {
  const technologies = await cmsService.getTechnologies();

  const featuredTechnologiesInOrder = technologies.filter(
    (tech) => tech.isFeatured,
  );

  return {
    props: {
      technologies: featuredTechnologiesInOrder,
    },
  };
};

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

const Home = ({ technologies }: HomeProps) => {
  return (
    <Container as="main">
      <Section css={{ display: "flex", alignItems: "center", gap: 84 }}>
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
              I'm Matheus, a software developer with 3 years of experience
              focused on front-end. I have worked in various industries such as
              clothing retail, video streaming and hospitality. I love building
              great products with interesting data, beautiful UI and great UX.
            </p>
          </Introduction>

          <ChipsGroup>
            {technologies.map((tech) => (
              <li key={tech.id}>
                <Link href={tech.websiteUrl} target="_blank">
                  <Chip highlightColor={tech.highlightColor}>
                    <Image
                      src={tech.image.url}
                      alt={tech.name}
                      width={18}
                      height={18}
                    />
                    {tech.name}
                  </Chip>
                </Link>
              </li>
            ))}
          </ChipsGroup>

          <CallToActions>
            <Button as={Link} href="/about">
              More about me
            </Button>
            <Button
              variant="outline"
              as={Link}
              href="/resume.pdf"
              target="_blank"
            >
              Resume
            </Button>
          </CallToActions>
        </HeroContent>
      </Section>

      <Divider />

      <Section css={{ paddingBottom: 0 }}>
        <Heading size="h2">Featured Projects</Heading>

        <FeaturedProjectsGroup>
          <FeaturedProject direction="left" />
          <FeaturedProject direction="right" />
        </FeaturedProjectsGroup>
      </Section>

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
    </Container>
  );
};

export default Home;
