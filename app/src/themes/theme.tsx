import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#1B1300" },
    secondary: { main: "##1B1300" },
    background: {default: "#FF9C00"}
  },
  typography: {
    h3: {
      fontSize: "2.2rem",
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
    },
  },
});