import type { AppProps } from "next/app";
import { theme } from "../themes/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import '../css/animation.css'
import { AppContextProvider } from "@/Context/AppContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    </AppContextProvider>
  );
}
