import Image from "next/future/image";
import Link from "next/link";

import { ChipGroup, Chip } from "@/components/chip";
import { Heading } from "@/components/heading";
import { styled } from "@/styles";

const HeroSection = styled("section", {
  display: "flex",
  alignItems: "center",
  gap: 84,
});

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
    color: "$accent-text",
    marginBottom: "0.5rem",
  },

  p: {
    fontSize: "$lg",
    color: "$neutral-text",
    marginTop: "1.5rem",
  },
});

const Home = () => {
  return (
    <main>
      <HeroSection>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </Introduction>

          <ChipGroup>
            <li>
              <Link href="https://google.com" target="_blank">
                <Chip highlightColor="green">
                  <div>Icon</div>
                  TypeScript
                </Chip>
              </Link>
            </li>
            <li>
              <Link href="https://google.com" target="_blank">
                <Chip highlightColor="yellow">
                  <div>Icon</div>
                  HTML
                </Chip>
              </Link>
            </li>
            <li>
              <Link href="https://google.com" target="_blank">
                <Chip highlightColor="pink">
                  <div>Icon</div>
                  JavaScript
                </Chip>
              </Link>
            </li>
            <li>
              <Link href="https://google.com" target="_blank">
                <Chip highlightColor="blue">
                  <div>Icon</div>
                  CSS
                </Chip>
              </Link>
            </li>
            <li>
              <Link href="https://google.com" target="_blank">
                <Chip highlightColor="red">
                  <div>Icon</div>
                  Vue
                </Chip>
              </Link>
            </li>
          </ChipGroup>
        </HeroContent>
      </HeroSection>
    </main>
  );
};

export default Home;
