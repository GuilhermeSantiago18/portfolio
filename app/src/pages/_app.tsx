import type { AppProps } from "next/app";
import { theme } from "../themes/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import '../css/animation.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
