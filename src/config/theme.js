import { createTheme } from "@mui/material";

// #FA03B5
const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#B712A5",
      contrastText: "#FFFFFE",
    },
    secondary: {
      main: "#17FA03",
    },
    background: {
      default:"linear-gradient(45deg, #36d1dc 30%, #5b86e5 90%)",
      //default:"rgba(140, 206, 221, 0.82)",
      //default:"#8CCEDD",
      //default: " #8CCEDDD1",
      color1:"linear-gradient(135deg,#36d1dc 0%,#5b86e5 25%,#748cb9 50%,#5b86e5 75%, #36d1dc 100%)",
      color2:"linear-gradient(45deg, #36d1dc 15%, #5b86e5 45%,#5b86e5 15%,#36d1dc 90%)",
      color3:"linear-gradient(135deg,#36d1dc 0%,#5b86e5 50%,#964f8e 100%)",
      paper: "linear-gradient(45deg,  #7181F7 30%, #B712A5 90%)",
    },
    divider: "rgba(230,221,221,0.12)",
  },
  typography: {
    fontWeightMedium: 500,
    fontWeightBold: 800,
  },
  overrides: {
    MuiButton: {
      root: {
        background: "linear-gradient(45deg,  #B712A5 30%, #7181F7 90%)",
        border: 0,
        borderRadius: 30,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "black",
        height: 48,
        padding: "20px 35px",
      },
    },
    MuiAppBar: {
      colorInherit: {
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: 40,
      },
    },
  },
  props: {
    MuiAppBar: {
      color: "inherit",
    },
    MuiTooltip: {
      arrow: true,
    },
  },
};

export const theme = createTheme(themeOptions);
