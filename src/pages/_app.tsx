import type { AppProps } from "next/app";

import { Container } from "@/components/container";

import { globalStyles } from "../styles/global";

globalStyles();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
};

export default App;
