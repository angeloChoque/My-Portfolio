import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins"
  },
  palette: {
    primary: {
      main: "rgb(118, 68, 95)",
    },
    secondary: {
      main: "rgb(0, 0, 0)",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "white",
            // "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
          // backgroundSize: "cover",
          // height: "100vh",
        },
      },
    },
  },
});

export default theme;
