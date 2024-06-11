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
      main: "rgb(146, 43, 33)",
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "white",
        },
        html:{
          scrollBehavior:"smooth"
        }
      },
    },
  },
});

export default theme;
