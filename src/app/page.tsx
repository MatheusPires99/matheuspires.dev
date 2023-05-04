import Image from "next/image";
import Link from "next/link";

import clsx from "clsx";
import { getPlaiceholder } from "plaiceholder";

import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { Divider } from "@/components/divider";
import { ProjectCard } from "@/components/project-card";
import { getProjects, getTechnologies } from "@/services/cms-service";

import avatar from "../../public/avatar.png";

const NUMBER_OF_PROJECTS_TO_DISPLAY = 6;

export const revalidate = 3600; // 1 hour

export default async function HomePage() {
  const [technologies, projects] = await Promise.all([
    getTechnologies(),
    getProjects(),
  ]);

  const featuredTechnologies = technologies.filter((tech) => tech.isFeatured);

  const projectsWithImageBlurHash = await Promise.all(
    projects.map(async (project) => {
      const { base64 } = await getPlaiceholder(project.images[0].url, {
        size: 24,
      });

      return {
        ...project,
        images: [{ ...project.images[0], blurDataUrl: base64 }],
      };
    }),
  );

  const featuredProjects = projectsWithImageBlurHash.filter(
    (tech) => tech.isFeatured,
  );
  const otherProjects = projectsWithImageBlurHash.filter(
    (tech) => !tech.isFeatured,
  );

  return (
    <>
      <section className="flex flex-col items-start gap-12 pb-14 pt-8 sm:pb-26 sm:pt-16 lg:flex-row lg:items-center lg:gap-20">
        <Image
          src={avatar}
          alt="Matheus's photo"
          width={298}
          height={298}
          quality={100}
          placeholder="blur"
          className="h-44 w-44 rounded shadow-lg sm:h-72 sm:w-72"
        />

        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="font-mono text-base text-text-contrast sm:text-lg">
              Hi, my name is
            </span>
            <h1 className="mt-2 text-4xl font-semibold leading-tight sm:text-6xl">
              Matheus Pires
            </h1>
            <p className="mt-4 text-base leading-normal text-accent-text sm:text-lg md:mt-6">
              I'm Matheus, a Front-end Developer and a JavaScript enthusiast. I
              have worked in various industries such as clothing retail, video
              streaming and hospitality. I love building great products with
              interesting data, beautiful UI and great UX.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {featuredTechnologies.map((tech) => (
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

          <div className="mt-8 flex items-center gap-4">
            <Button asChild>
              <Link href="/about">More about me</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="/resume.pdf" target="_blank">
                Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Divider />

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
                      sizes="100%"
                      blurDataURL={project.images[0].blurDataUrl}
                      className="object-cover transition-transform hover:scale-105 lg:hover:transform-none"
                    />
                  </div>
                </Link>

                <div
                  className={clsx(
                    "flex w-full flex-col lg:absolute lg:top-1/2 lg:w-[430px] lg:-translate-y-1/2",
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

      <section className="flex flex-col py-14 sm:pb-26 sm:pt-36">
        <h3 className="text-center text-2xl font-semibold sm:text-3xl">
          Other Projects
        </h3>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 [&>a]:mx-auto">
          {otherProjects
            .slice(0, NUMBER_OF_PROJECTS_TO_DISPLAY)
            .map((project) => (
              <ProjectCard
                key={project.id}
                slug={project.slug}
                name={project.name}
                description={project.description}
                image={{
                  url: project.images[0].url,
                  blurDataUrl: (project.images[0] as any).blurDataUrl,
                }}
              />
            ))}
        </div>

        <Button variant="outline" asChild className="mt-14 self-center">
          <Link href="/projects">View all</Link>
        </Button>
      </section>
    </>
  );
}
