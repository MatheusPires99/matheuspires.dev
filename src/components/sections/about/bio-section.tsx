import Image from "next/image";

import { Button } from "@/components/button";

import cover from "../../../../public/cover.png";

export const BioSection = () => {
  return (
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
            I started cultivating a passion for the web as I realised it's power
            and universality compared to any sort of native compiled application
          </strong>
          .
        </p>
        <p>
          When in college, it was clear to me that I was going to work with web
          technologies. I went on take a position at{" "}
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
          <strong>my passion for front-end</strong> too, so I decided look for a
          new challenge.
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
          , where I had the opportunity to work on award projects for top level
          brazilian brands such as{" "}
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
          producing all sorts of high-end web-based solutions based on client's
          needs.
        </p>
        <p>
          In early 2021, I took another challenge and I accepted a front-end
          engineer role at{" "}
          <a href="https://www.numastays.com" target="_blank" rel="noreferrer">
            numa
          </a>
          , an international company based in Germany, where I had the
          opportunity to develop new features to the projects and craft an
          incredible experience for the users.
        </p>
        <p>
          I am absolutely passionate about the web and{" "}
          <strong>I focus my expertise in front-end development</strong>. With 3
          years experience in web development and great collaboration skills,
          notably with design and UX people,{" "}
          <strong>I am a solid addition to any team</strong>.
        </p>
      </div>
    </section>
  );
};
