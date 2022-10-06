import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { GetInTouch } from "@/components/get-in-touch";
import { Header } from "@/components/header";
import { lightTheme } from "@/styles";

import { globalStyles } from "../styles/global";

globalStyles();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ dark: "dark-theme", light: lightTheme.className }}
      defaultTheme="dark"
    >
      <Header />
      <Container as="main" css={{ marginTop: "$sizes$header-height" }}>
        <Component {...pageProps} />
      </Container>
      <GetInTouch />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
