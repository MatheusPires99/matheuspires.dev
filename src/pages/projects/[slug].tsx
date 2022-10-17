import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/future/image";

import { getPlaiceholder } from "plaiceholder";

import { Button } from "@/components/button";
import { Chip, ChipsGroup } from "@/components/chip";
import { Divider } from "@/components/divider";
import { Heading } from "@/components/heading";
import { Link } from "@/components/link";
import { Section } from "@/components/section";
import { SEO } from "@/components/seo";
import { cmsService } from "@/services";
import { styled } from "@/styles";

const REVALIDATE_TIME_IN_SECONDS = 60 * 60; // 1 hour

const Box = styled("div");

const StyledImage = styled(Image, {
  borderRadius: "$md",
  boxShadow: "$md",

  "@laptop": {
    width: "100%",
    height: "100%",
  },
});

type ProjectDetailsProps = {
  project: {
    name: string;
    description: string;
    githubUrl: string;
    websiteUrl?: string;
    images: {
      url: string;
      blurDataUrl: string;
      title: string;
      description: string;
    }[];
    technologies: {
      id: string;
      name: string;
      image: { url: string };
      websiteUrl: string;
      highlightColor:
        | "cyan"
        | "green"
        | "yellow"
        | "pink"
        | "blue"
        | "orange"
        | "black"
        | "red";
    }[];
  };
};

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <>
      <SEO />

      <Section isFirstSection>
        <Heading as="h1" css={{ marginBottom: "2rem" }}>
          {project.name}
        </Heading>

        <StyledImage
          src={project.images[0].url}
          alt={project.name}
          width={936}
          height={525}
          quality={100}
          placeholder="blur"
          blurDataURL={project.images[0].blurDataUrl}
        />

        <Box
          css={{
            marginTop: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            "@tablet": {
              flexDirection: "column",
              alignItems: "normal",
              gap: "2rem",
            },
          }}
        >
          <Box
            css={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              span: { color: "$accent-text", fontWeight: "600" },
            }}
          >
            <span>Technologies</span>
            <ChipsGroup>
              {project.technologies.map((tech) => (
                <li key={tech.id}>
                  <Chip
                    highlightColor={tech.highlightColor}
                    as={Link}
                    href={tech.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
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
          </Box>
          <Box css={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {project.websiteUrl && (
              <Button
                variant="outline"
                as={Link}
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                css={{ "@tablet": { width: "100%" } }}
              >
                Go to Website
              </Button>
            )}
            <Button
              as={Link}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              css={{ "@tablet": { width: "100%" } }}
            >
              Go to Github
            </Button>
          </Box>
        </Box>
      </Section>
      <Divider />
      <Section>
        <Box css={{ p: { color: "$accent-text", marginTop: "1rem" } }}>
          <Heading as="h2" css={{ maxWidth: "80%" }}>
            Codify is an application created from Spotify's Web API
          </Heading>
          <p>{project.description}</p>
        </Box>

        <Box
          css={{
            marginTop: "3.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "3.5rem",
          }}
        >
          {project.images.map((image) => (
            <Box
              key={image.url}
              css={{ position: "relative", display: "flex" }}
            >
              <StyledImage
                src={image.url}
                alt=""
                width={936}
                height={525}
                quality={100}
                placeholder="blur"
                blurDataURL={image.blurDataUrl}
              />

              <Box
                css={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  height: "50%",
                  display: "flex",
                  alignItems: "flex-end",
                  borderBottomLeftRadius: "$md",
                  borderBottomRightRadius: "$md",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8),rgba(0,0,0,0.77311) 12.83%,rgba(0,0,0,0.72685) 24%,rgba(0,0,0,0.66487) 33.77%,rgba(0,0,0,0.59081) 42.37%,rgba(0,0,0,0.50831) 50.07%,rgba(0,0,0,0.421) 57.13%,rgba(0,0,0,0.33252) 63.78%,rgba(0,0,0,0.24652) 70.3%,rgba(0,0,0,0.16663) 76.92%,rgba(0,0,0,0.09648) 83.91%,rgba(0,0,0,0.03973) 91.52%,rgba(0,0,0,0))",
                }}
              >
                <Box
                  css={{
                    color: "#EEF1FD",
                    padding: "0 2rem 2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <Heading>{image.title}</Heading>
                  <p>{image.description}</p>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Section>
    </>
  );
};

export default ProjectDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await cmsService.getProjects();

  const paths = projects.map((project) => ({ params: { slug: project.slug } }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string;

  const project = await cmsService.getProjectBySlug(slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  const imagesWithBlurDataUrl = await Promise.all(
    project.images.map(async (image) => {
      const { base64 } = await getPlaiceholder(image.url, { size: 24 });

      return {
        ...image,
        blurDataUrl: base64,
      };
    }),
  );

  return {
    props: {
      project: {
        ...project,
        images: imagesWithBlurDataUrl,
      },
    },
    revalidate: REVALIDATE_TIME_IN_SECONDS,
  };
};
