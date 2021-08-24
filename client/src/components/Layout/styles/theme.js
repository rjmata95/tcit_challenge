import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
  },
  overrides: {
    MuiButton: {
      root: {
        color: "inherit",
        textTransform: "none",
        "&:hover": {
          color: "#ff9100",
        },
      },
    },
    MuiIconButton: {
      root: {
        color: "inherit",
      },
    },
    MuiTypography: {
      root: {
        color: "inherit",
      },
    },
    MuiContainer: {
      root: {
        minHeight: "100%",
      },
    },
  },
  palette: {
    primary: {
      main: "#74d6aa",
    },
    secondary: {
      main: "#fbcb63",
    },
    background: {
      secondary: "#2b4852",
      primary: "#173d17",
      // secondary: "#240805",
      // primary: "#fc6464",
    },
    text: {
      // primary: "#ff9100",
      primary: "#fbcb63",
    },
  },
});
