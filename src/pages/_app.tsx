import type { AppProps } from "next/app";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";

import { globalStyles } from "../styles/global";

globalStyles();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Container>
      <Component {...pageProps} />
      <Footer />
    </Container>
  );
};

export default App;
