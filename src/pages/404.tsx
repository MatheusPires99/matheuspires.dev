import Link from "next/link";

import { Button } from "@/components/button";
import { SEO } from "@/components/seo";

const NotFound = () => {
  return (
    <>
      <SEO title="404 – Matheus Pires" />

      <section className="mx-auto flex max-w-[672px] flex-col pb-14 pt-8 sm:pb-26 sm:pt-16">
        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
          404 – Unavailable For Legal Reasons
        </h2>
        <p className="mt-4 leading-normal text-accent-text">
          Why show a generic 404 when I can make it sound mysterious? It seems
          you've found something that used to exist, or you spelled something
          wrong. I'm guessing you spelled something wrong. Can you double check
          that URL?
        </p>
        <Button className="mt-8 self-center" asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </section>
    </>
  );
};

export default NotFound;
