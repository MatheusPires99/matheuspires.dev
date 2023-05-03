import Image from "next/image";

import clsx from "clsx";

import { Chip, ChipsGroup } from "@/components/chip";
import { Link } from "@/components/link";
import { Section } from "@/components/section";
import { ProjectsQuery } from "@/generated/graphql";

import {
  FeaturedProject,
  FeaturedProjectContent,
  FeaturedProjectImageContainer,
  FeaturedProjectsGroup,
} from "./styles";

type FeaturedProjectSectionProps = {
  featuredProjects: ProjectsQuery["projects"];
};

export const FeaturedProjectsSection = ({
  featuredProjects,
}: FeaturedProjectSectionProps) => {
  return (
    <Section css={{ paddingBottom: 0 }}>
      <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
        Featured Projects
      </h2>

      <FeaturedProjectsGroup>
        {featuredProjects.map((project, index) => {
          const direction = index % 2 === 0 ? "right" : "left";

          return (
            <FeaturedProject key={project.id} direction={direction}>
              <Link href={`/projects/${project.slug}`}>
                <FeaturedProjectImageContainer>
                  <Image
                    src={project.images[0].url}
                    alt={project.name}
                    fill
                    placeholder="blur"
                    blurDataURL={(project.images[0] as any).blurDataUrl}
                  />
                </FeaturedProjectImageContainer>
              </Link>

              <FeaturedProjectContent
                className={clsx({
                  "items-end right-0": direction === "left",
                  "items-start left-0": direction === "right",
                })}
              >
                <Link variant="primary" href={`/projects/${project.slug}`}>
                  <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">
                    {project.name}
                  </h3>
                </Link>

                <ChipsGroup css={{ marginTop: "1rem" }}>
                  {project.technologies.slice(0, 2).map((tech) => (
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

                <div
                  className={clsx(
                    "mt-40 w-[80vw] rounded bg-shape p-6 shadow-lg lg:mt-6 lg:w-auto",
                    {
                      "text-right": direction === "left",
                      "text-left": direction === "right",
                    },
                  )}
                >
                  <p className="leading-normal">{project.description}</p>
                </div>
              </FeaturedProjectContent>
            </FeaturedProject>
          );
        })}
      </FeaturedProjectsGroup>
    </Section>
  );
};
