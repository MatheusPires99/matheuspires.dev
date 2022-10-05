import type { AppProps } from "next/app";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { GetInTouch } from "@/components/get-in-touch";
import { Header } from "@/components/header";

import { globalStyles } from "../styles/global";

globalStyles();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Container as="main" css={{ marginTop: "$sizes$header-height" }}>
        <Component {...pageProps} />
      </Container>
      <GetInTouch />
      <Footer />
    </>
  );
};

export default App;
