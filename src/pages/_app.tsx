import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Inter, Fira_Mono } from "next/font/google";

import "@/styles/global.css";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { GetInTouch } from "@/components/get-in-touch";
import { Header } from "@/components/header";
import { globalStyles } from "@/styles/global";

globalStyles();

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const firaMono = Fira_Mono({
  subsets: ["latin"],
  variable: "--font-code",
  weight: ["400", "500"],
  display: "swap",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx global>{`
        :root {
          --font-sans: ${inter.style.fontFamily};
          --font-code: ${firaMono.style.fontFamily};
        }
      `}</style>

      <ThemeProvider attribute="class" enableSystem defaultTheme="system">
        <Header />
        <Container
          as="main"
          css={{ flex: 1, marginTop: "$sizes$header-height" }}
        >
          <Component {...pageProps} />
        </Container>
        <GetInTouch />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
