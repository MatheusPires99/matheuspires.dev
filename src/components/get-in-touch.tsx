import { Button } from "@/components/button";
import { Divider } from "@/components/divider";

export const GetInTouch = () => {
  return (
    <div>
      <Divider />

      <section className="py-14 sm:py-26">
        <div className="container flex flex-col items-center">
          <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-center text-lg leading-6 text-accent-text">
            I'm always open to chat, so please don't hesitate contacting me!
          </p>
          <Button variant="outline" className="mt-10 sm:mt-14" asChild>
            <a href="mailto:matheushenriquepires99@gmail.com">Say Hello</a>
          </Button>
        </div>
      </section>
    </div>
  );
};
