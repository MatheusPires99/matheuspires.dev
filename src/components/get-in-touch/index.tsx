import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { Link } from "@/components/link";

import { Divider } from "../divider";
import { Section } from "../section";
import { GetInTouchContainer } from "./styles";

export const GetInTouch = () => {
  return (
    <div>
      <Divider />

      <Section as="div">
        <GetInTouchContainer>
          <Heading
            size={{
              "@initial": "h2",
              "@mobile": "h3",
            }}
            as="h2"
            centered
          >
            Get In Touch
          </Heading>
          <p>
            I'm always open to chat, so please don't hesitate contacting me!
          </p>
          <Button
            variant="outline"
            as={Link}
            href="mailto:matheushenriquepires99@gmail.com"
          >
            Say Hello
          </Button>
        </GetInTouchContainer>
      </Section>
    </div>
  );
};
