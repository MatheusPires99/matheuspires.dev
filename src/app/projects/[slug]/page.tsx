import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getPlaiceholder } from "plaiceholder";

import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { Icons } from "@/components/icons";
import { getProjectBySlug, getProjects } from "@/services/cms-service";

export const revalidate = 3600; // 1 hour

type ProjectsPageProps = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({
  params,
}: ProjectsPageProps): Promise<Metadata> => {
  const project = await getProjectBySlug(params.slug);

  return {
    title: project!.name,
  };
};

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectsPageProps) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return notFound();
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

  const projectWithBlurDataUrl = {
    ...project,
    images: imagesWithBlurDataUrl,
  };

  return (
    <>
      <section className="pb-14 pt-8 sm:pb-26 sm:pt-16">
        <h1 className="mb-8 text-3xl font-semibold leading-tight sm:text-4xl">
          {project.name}
        </h1>

        <Image
          src={projectWithBlurDataUrl.images[0].url}
          alt={project.name}
          width={946}
          height={425}
          quality={100}
          sizes="100%"
          placeholder="blur"
          blurDataURL={projectWithBlurDataUrl.images[0].blurDataUrl}
          className="rounded shadow-lg"
        />

        <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-center md:gap-4">
          <div className="flex flex-col gap-3">
            <span className="text-sm text-accent-text">Technologies</span>

            <div className="flex flex-wrap items-center gap-2">
              {projectWithBlurDataUrl.technologies.map((tech) => (
                <Chip
                  key={tech.id}
                  highlightColor={tech.highlightColor}
                  asChild
                >
                  <a
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
                  </a>
                </Chip>
              ))}
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-4">
            {projectWithBlurDataUrl.websiteUrl && (
              <Button
                variant="outline"
                size="sm"
                className="w-full lg:w-auto"
                asChild
              >
                <a
                  href={projectWithBlurDataUrl.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to Website
                  <Icons.ArrowRight />
                </a>
              </Button>
            )}
            <Button size="sm" className="w-full lg:w-auto" asChild>
              <a
                href={projectWithBlurDataUrl.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.Github />
                Go to Github
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14 !pt-0 sm:py-26">
        <div>
          <h2 className="max-w-full text-3xl font-semibold leading-tight sm:max-w-[80%] sm:text-4xl">
            {projectWithBlurDataUrl.title}
          </h2>
          <p className="mt-4 leading-normal text-accent-text">
            {projectWithBlurDataUrl.description}
          </p>
        </div>

        <ul className="mt-14 flex flex-col gap-14">
          {projectWithBlurDataUrl.images.map((image) => (
            <li
              key={image.url}
              className="relative flex flex-col gap-4 sm:gap-6"
            >
              <Image
                src={image.url}
                alt={image.description || ""}
                width={946}
                height={425}
                quality={100}
                sizes="100%"
                placeholder="blur"
                blurDataURL={image.blurDataUrl}
                className="rounded-lg shadow-lg"
              />

              <div className="flex flex-col gap-2">
                <strong className="text-xl sm:text-2xl">{image.title}</strong>
                <p className="text-sm leading-normal text-accent-text sm:text-base">
                  {image.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
