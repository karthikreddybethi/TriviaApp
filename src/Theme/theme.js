import { createMuiTheme } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

export const formTheme = createMuiTheme({
  props: {
    MuiInput: {
      // disableUnderline: true,
    },
  },
  overrides: {
    MuiMenuItem: {
      root: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "1.3rem",
      },
    },
    MuiTextField: {
      root: {
        // width: "100%",
        "& .MuiInput-formControl ": {
          marginTop: "26px",
        },
      },
    },
    MuiInputBase: {
      root: {
        marginTop: "30px",
      },
    },

    MuiFormControl: {
      root: {
        width: "100%",
      },
    },
    MuiInputLabel: {
      root: {
        width: "100%",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 700,
        fontSize: "1.5rem",
        "&$focused": {
          color: "#C97064",
        },
      },
    },
    MuiInput: {
      root: {
        width: "100%",
        fontFamily: "Montserrat, sans-serif",
        fontSize: "1.3rem",
        "&.MuiInput-underline:after": {
          borderBottom: "2px solid #C97064",
        },
        "&.MuiInput-underline:before": {
          borderBottom: "2px solid black",
        },
        "&.MuiInput-underline:hover:not(.Mui-disabled):before": {
          borderBottom: "2px solid black",
        },
      },
    },

    MuiButton: {
      containedPrimary: {
        backgroundColor: "black",
        "&:hover": {
          backgroundColor: "black",
          [breakpoints.down("md")]: {
            backgroundColor: "black",
          },
        },
      },
      contained: {},
    },
  },
});

export const buttonTheme = createMuiTheme({
  overrides: {
    MuiButton: {
      containedPrimary: {
        backgroundColor: "black",
        "&:hover": {
          backgroundColor: "black",
          [breakpoints.down("md")]: {
            backgroundColor: "black",
          },
        },
      },
      contained: {},
    },
  },
});
