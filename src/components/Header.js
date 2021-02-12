import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBarStyles: {
    backgroundColor: "#FD85AF",
    boxShadow: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolBarStyles: {
    minHeight: "70px",
  },
  typhographyStyles: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
      textAlign: "center",
      width: "100%",
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="secondary"
        className={classes.appBarStyles}
      >
        <Toolbar variant="dense" className={classes.toolBarStyles}>
          <Typography
            variant="h4"
            color="inherit"
            className={classes.typhographyStyles}
          >
            GetBright
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
