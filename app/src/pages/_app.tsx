import type { AppProps } from "next/app";
import { theme } from "../themes/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import "../css/animation.css";
import { AppContextProvider } from "@/Context/AppContext";
import Head from "next/head";
import LanguageIcon from '@mui/icons-material/Language';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>

        <title>Guilherme Santiago</title>
        <link rel="icon" href="/images/settings.png" />
      </Head>
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </AppContextProvider>
    </>
  );
}
