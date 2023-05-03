import Image from "next/image";
import Link from "next/link";

import clsx from "clsx";

import { Chip } from "@/components/chip";
import { ProjectsQuery } from "@/generated/graphql";

type FeaturedProjectSectionProps = {
  featuredProjects: ProjectsQuery["projects"];
};

export const FeaturedProjectsSection = ({
  featuredProjects,
}: FeaturedProjectSectionProps) => {
  return (
    <section className="py-14 !pb-0 sm:py-26">
      <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
        Featured Projects
      </h2>

      <div className="mt-14 flex flex-col gap-16 sm:gap-26">
        {featuredProjects.map((project, index) => {
          const direction = index % 2 === 0 ? "right" : "left";

          return (
            <div
              key={project.id}
              className={clsx("relative flex", {
                "justify-start": direction === "left",
                "justify-end": direction === "right",
              })}
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="absolute top-26 -z-10 h-[216px] w-full overflow-hidden rounded border border-accent-border lg:relative lg:top-auto lg:z-auto lg:h-[328px] lg:w-[602px]">
                  <Image
                    src={project.images[0].url}
                    alt={project.name}
                    fill
                    placeholder="blur"
                    blurDataURL={(project.images[0] as any).blurDataUrl}
                    className="object-cover transition-transform hover:scale-105 lg:hover:transform-none"
                  />
                </div>
              </Link>

              <div
                className={clsx(
                  "flex w-[430px] flex-col lg:absolute lg:top-1/2 lg:-translate-y-1/2",
                  {
                    "items-end right-0": direction === "left",
                    "items-start left-0": direction === "right",
                  },
                )}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-text-base transition hover:text-text-contrast"
                >
                  <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">
                    {project.name}
                  </h3>
                </Link>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <Chip
                      key={tech.id}
                      highlightColor={tech.highlightColor}
                      asChild
                    >
                      <a
                        href={tech.websiteUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
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
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
