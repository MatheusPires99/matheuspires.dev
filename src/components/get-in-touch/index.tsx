import { Button } from "@/components/button";
import { Heading } from "@/components/heading";

import { Divider } from "../divider";
import { Section } from "../section";
import { GetInTouchContainer } from "./styles";

export const GetInTouch = () => {
  return (
    <div>
      <Divider />

      <Section as="div">
        <GetInTouchContainer>
          <Heading centered>Get In Touch</Heading>
          <p>
            I'm always open to chat, so please don't hesitate contacting me!
          </p>
          <Button variant="outline" asChild>
            <a href="mailto:matheushenriquepires99@gmail.com">Say Hello</a>
          </Button>
        </GetInTouchContainer>
      </Section>
    </div>
  );
};
