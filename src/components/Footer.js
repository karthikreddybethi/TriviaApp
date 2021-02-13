import { Box, Typography, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => {
  return {
    root: {
      "& span": {
        color: "#FD85AF",
        fontWeight: theme.typography.fontWeightBold,
        marginLeft: "0.5rem",
      },
    },
    typography: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: theme.typography.fontWeightMedium,
    },
  };
});
function Footer() {
  const classes = useStyles();
  return (
    <Box component="footer" className={classes.root} p="2rem">
      <Typography variant="h5" align="center" className={classes.typography}>
        Designed and Developed <span>Karthik Bethi</span>
      </Typography>
    </Box>
  );
}

export default Footer;
