import { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { Divider } from "@/components/divider";
import { getTechnologies, getWorkExperiences } from "@/services/cms-service";

import cover from "../../../public/cover.png";

export const metadata: Metadata = {
  title: "About",
};

export const revalidate = 3600; // 1 hour

export default async function AboutPage() {
  const [technologies, workExperiences] = await Promise.all([
    getTechnologies(),
    getWorkExperiences(),
  ]);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      <section className="pb-14 pt-8 sm:pb-26 sm:pt-16">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
            About
          </h1>
          <Button variant="outline" asChild>
            <a href="/resume.pdf" target="_blank">
              Resume
            </a>
          </Button>
        </header>

        <Image
          src={cover}
          alt=""
          width={946}
          height={425}
          quality={100}
          placeholder="blur"
          className="mt-8"
        />

        <div className="prose prose-lg mt-8 w-full max-w-none dark:prose-invert prose-p:text-accent-text prose-a:font-semibold prose-a:text-text-contrast prose-a:no-underline hover:prose-a:underline prose-strong:text-text-base sm:mt-14">
          <p>
            Whilst studying computer science, I always felt different. I cared
            deeply about the visual components of programming. After college, I
            would spend my nights learning about HTML, CSS, design, animations,
            etc.{" "}
            <strong>
              I started cultivating a passion for the web as I realised it's
              power and universality compared to any sort of native compiled
              application
            </strong>
            .
          </p>
          <p>
            When in college, it was clear to me that I was going to work with
            web technologies. I went on take a position at{" "}
            <a
              href="https://www.serafine.com.br"
              target="_blank"
              rel="noreferrer"
            >
              Serafine
            </a>
            , as intern part of the e-commerce team working with front-end
            technologies, such as HTML, CSS and JavaScript to build UI
            improvements. It was not enought to fuel{" "}
            <strong>my passion for front-end</strong> too, so I decided look for
            a new challenge.
          </p>
          <p>
            After 8 months at Serafine, I accepted a front-end developer role at{" "}
            <a
              href="https://www.sambatech.com.br"
              target="_blank"
              rel="noreferrer"
            >
              Sambatech
            </a>
            , where I had the opportunity to work on award projects for top
            level brazilian brands such as{" "}
            <a
              href="https://www.portoseguro.com.br"
              target="_blank"
              rel="noreferrer"
            >
              Porto Seguro
            </a>{" "}
            and{" "}
            <a href="https://www.ambev.com.br" target="_blank" rel="noreferrer">
              Ambev
            </a>{" "}
            producing all sorts of high-end web-based solutions based on
            client's needs.
          </p>
          <p>
            In early 2021, I took another challenge and I accepted a front-end
            engineer role at{" "}
            <a
              href="https://www.numastays.com"
              target="_blank"
              rel="noreferrer"
            >
              numa
            </a>
            , an international company based in Germany, where I had the
            opportunity to develop new features to the projects and craft an
            incredible experience for the users.
          </p>
          <p>
            I am absolutely passionate about the web and{" "}
            <strong>I focus my expertise in front-end development</strong>. With
            3 years experience in web development and great collaboration
            skills, notably with design and UX people,{" "}
            <strong>I am a solid addition to any team</strong>.
          </p>
        </div>
      </section>

      <Divider />

      <section className="py-14 sm:py-26">
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
      </section>

      <Divider />

      <section className="py-14 sm:py-26">
        <h2 className="mb-18 text-3xl font-semibold leading-tight sm:mb-26 sm:text-4xl">
          Professional Experience
        </h2>

        <div className="relative flex flex-col before:absolute before:left-[calc(3.75rem/2)] before:h-full before:w-[2px] before:bg-shape md:gap-8 md:before:left-1/2">
          {workExperiences.map((workExperience) => (
            <div
              key={workExperience.id}
              className="flex items-center gap-6 even:flex-row md:items-start md:gap-0 md:even:flex-row-reverse"
            >
              <div className="z-20 flex h-[3.75rem] w-[3.75rem] shrink-0 items-center justify-center rounded-full bg-shape md:absolute md:left-1/2 md:ml-[calc(-3.75rem/2)]">
                <Image
                  src={workExperience.company!.logo.url}
                  alt={workExperience.company!.name}
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </div>

              <div className="flex w-full flex-col md:w-[45%]">
                <h3 className="flex flex-wrap items-center gap-2 text-2xl font-semibold leading-tight">
                  {workExperience.role}
                  <a
                    href={workExperience.company!.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="relative font-semibold text-text-contrast hover:before:absolute hover:before:bottom-0 hover:before:h-px hover:before:w-full hover:before:bg-text-contrast"
                  >
                    @ {workExperience.company!.name}
                  </a>
                </h3>

                <span className="mt-2 block font-mono text-accent-text">
                  {formatDate(workExperience.startsAt)} -{" "}
                  {workExperience.endsAt
                    ? formatDate(workExperience.endsAt)
                    : "present"}
                </span>

                <div
                  className="prose prose-lg mt-4 dark:prose-invert prose-p:text-accent-text prose-a:font-semibold prose-a:text-text-contrast prose-a:no-underline hover:prose-a:underline prose-strong:text-text-base"
                  dangerouslySetInnerHTML={{
                    __html: workExperience.description.html,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
