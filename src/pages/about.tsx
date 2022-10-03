import Image from "next/future/image";

import { FileHtml } from "phosphor-react";

import { Button } from "@/components/button";
import { Chip, ChipsGroup } from "@/components/chip";
import { Container } from "@/components/container";
import { Divider } from "@/components/divider";
import { Heading } from "@/components/heading";
import { Link } from "@/components/link";
import { RichText } from "@/components/rich-text";
import { Section } from "@/components/section";
import { WorkExperiences } from "@/components/work-experiences";
import { styled } from "@/styles";

const AboutHeader = styled("header", {
  marginBottom: "2rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const About = () => {
  return (
    <Container as="main">
      <Section>
        <AboutHeader>
          <Heading size="h2" as="h2">
            About
          </Heading>
          <Button
            variant="outline"
            as={Link}
            href="/resume.pdf"
            target="_blank"
          >
            Resume
          </Button>
        </AboutHeader>

        <Image
          src="/me-full.png"
          alt=""
          width={946}
          height={425}
          quality={100}
        />

        <RichText css={{ marginTop: "3.5rem" }} variant="lg">
          {
            '<p>This repository contains a monorepo of the <strong>Pokedex</strong> app</p><p>The Pokedex is an app which the user can view a list of Pokemons, search and view the details of a specific Pokemon. To get the Pokemons data it was used the <a target=\'_blank\' title="https://pokeapi.co/" href="https://pokeapi.co/">PokéAPI</a>.</p><p>The main goal with this project was to know and learn hot the animations and gestures work on React Native. In order to do that it was used mainly the Animated API from React Native.</p>'
          }
        </RichText>
      </Section>

      <Divider />

      <Section>
        <Heading size="h2" as="h2" css={{ marginBottom: "2.5rem" }}>
          Skills
        </Heading>
        <ChipsGroup>
          {Array.from({ length: 20 }).map(() => (
            <li key="">
              <Link href="">
                <Chip highlightColor="orange">
                  <FileHtml />
                  HTML
                </Chip>
              </Link>
            </li>
          ))}
        </ChipsGroup>
      </Section>

      <Divider />

      <Section>
        <Heading size="h2" as="h2" css={{ marginBottom: "6.5rem" }}>
          Professional Experience
        </Heading>

        <WorkExperiences />
      </Section>
    </Container>
  );
};

export default About;
