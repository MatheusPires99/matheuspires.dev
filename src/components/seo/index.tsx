import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

type SEOProps = {
  title?: string;
  description?: string;
};

export const SEO = ({
  title = "Matheus Pires - Front-end Engineer",
  description = "I'm Matheus, a web developer focused on front-end. I love building great products with interesting data, beautiful UI and great UX",
}: SEOProps) => {
  const router = useRouter();

  const url = "https://matheuspires-portfolio.vercel.app";
  const imageUrl = `${url}/matheus-banner.png`;
  const path = router.pathname;

  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta property="og:url" content={`${url}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
    </Head>
  );
};
