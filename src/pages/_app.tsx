import type { AppProps } from "next/app";

import { globalStyles } from "../styles/global";

globalStyles();

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
