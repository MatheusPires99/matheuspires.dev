import { Button } from "@/components/button";
import { Link } from "@/components/link";
import { Section } from "@/components/section";
import { SEO } from "@/components/seo";
import { styled } from "@/styles";

const Paragraph = styled("p", {
  color: "$accent-text",
  lineHeight: "$base",
  marginTop: "1rem",
});

const NotFound = () => {
  return (
    <>
      <SEO title="404 – Matheus Pires" />

      <Section
        isFirstSection
        css={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 672,
          margin: "0 auto",
        }}
      >
        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
          404 – Unavailable For Legal Reasons
        </h2>
        <Paragraph>
          Why show a generic 404 when I can make it sound mysterious? It seems
          you've found something that used to exist, or you spelled something
          wrong. I'm guessing you spelled something wrong. Can you double check
          that URL?
        </Paragraph>
        <Button className="mt-8 self-center" asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </Section>
    </>
  );
};

export default NotFound;
