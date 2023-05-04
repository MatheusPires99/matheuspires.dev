import { Metadata } from "next";
import { Fira_Mono, Inter } from "next/font/google";
import { ReactNode } from "react";

import { Analytics } from "@/components/analytics";
import { Footer } from "@/components/footer";
import { GetInTouch } from "@/components/get-in-touch";
import { Header } from "@/components/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { siteConfig } from "@/config/site";

import "@/styles/global.css";

import { RootProviders } from "./providers";

type RootLayoutProps = {
  children: ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const firaMono = Fira_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Matheus Pires - Front-end Developer",
    template: "%s | Matheus Pires",
  },
  description: siteConfig.description,
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FDFDFE" },
    { media: "(prefers-color-scheme: dark)", color: "#131620" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description:
      "I'm Matheus, a web developer focused on front-end. I love building great products with interesting data, beautiful UI and great UX.",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 596,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon-16x16.png",
    apple: "/favicons//apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/favicons/site.webmanifest`,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaMono.variable}`}>
        <RootProviders>
          <Header />
          <main className="container mt-20 flex-1">{children}</main>
          <GetInTouch />
          <Footer />

          <TailwindIndicator />
          <Analytics />
        </RootProviders>
      </body>
    </html>
  );
}
