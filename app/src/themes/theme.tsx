import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#1B1300" },
    secondary: { main: "#E1E2E2" },
    background: {default: "#1B232A"}
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