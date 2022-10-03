import type { AppProps } from "next/app";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { styled } from "@/styles";

import { globalStyles } from "../styles/global";

globalStyles();

const Box = styled("div", {
  marginTop: "$sizes$header-height",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Box>
        <Component {...pageProps} />
      </Box>
      <Footer />
    </>
  );
};

export default App;
