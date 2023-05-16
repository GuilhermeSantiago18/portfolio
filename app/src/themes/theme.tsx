import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#FDCD3B" },
    secondary: { main: "#FFCD00" },
    background: {default: '#555555'}
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