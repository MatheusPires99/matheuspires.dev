import { Button } from "@/components/button";
import { Heading } from "@/components/heading";

import { Divider } from "../divider";
import { Section } from "../section";

export const GetInTouch = () => {
  return (
    <div>
      <Divider />

      <Section as="div">
        <div className="container flex flex-col items-center">
          <Heading centered>Get In Touch</Heading>
          <p className="mt-4 text-center text-lg leading-6 text-accent-text">
            I'm always open to chat, so please don't hesitate contacting me!
          </p>
          <Button variant="outline" className="mt-10 sm:mt-14" asChild>
            <a href="mailto:matheushenriquepires99@gmail.com">Say Hello</a>
          </Button>
        </div>
      </Section>
    </div>
  );
};
