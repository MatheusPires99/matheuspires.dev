import Image from "next/future/image";

import meImage from "@/assets/images/me-full.png";
import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { Link } from "@/components/link";
import { RichText } from "@/components/rich-text";
import { Section } from "@/components/section";

import { BioHeader } from "./styles";

export const BioSection = () => {
  return (
    <Section isFirstSection>
      <BioHeader>
        <Heading size="h2">About</Heading>
        <Button variant="outline" as={Link} href="/resume.pdf" target="_blank">
          Resume
        </Button>
      </BioHeader>

      <Image
        src={meImage}
        alt=""
        width={946}
        height={425}
        quality={100}
        placeholder="blur"
      />

      <RichText css={{ marginTop: "3.5rem" }} variant="lg">
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
          technologies. I went on take a position at Serafine, as intern part of
          the e-commerce team working with front-end technologies, such as HTML,
          CSS and JavaScript to build UI improvements. It was not enought to
          fuel <strong>my passion for front-end</strong> too, so I decided look
          for a new challenge.
        </p>
        <p>
          After 8 months at Serafine, I accepted a front-end developer role at
          Sambatech, where I had the opportunity to work on award projects for
          top level brazilian brands such as{" "}
          <Link href="https://www.portoseguro.com.br/" target="_blank">
            Porto Seguro
          </Link>{" "}
          and{" "}
          <Link href="https://www.ambev.com.br/" target="_blank">
            Ambev
          </Link>{" "}
          producing all sorts of high-end web-based solutions based on client's
          needs.
        </p>
        <p>
          In early 2021, I took another challenge and I accepted a front-end
          engineer role at numa, an international company based in Germany,
          where I had the opportunity to develop new features to the projects
          and craft an incredible experience for the users.
        </p>
        <p>
          I am absolutely passionate about the web and{" "}
          <strong>I focus my expertise in front-end development</strong>. With 3
          years experience in web development and great collaboration skills,
          notably with design and UX people,{" "}
          <strong>I am a solid addition to any team</strong>.
        </p>
      </RichText>
    </Section>
  );
};
