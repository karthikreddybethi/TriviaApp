import React, { useEffect, useRef } from "react";
import { Box, Typography, makeStyles, Grid } from "@material-ui/core";
import lottie from "lottie-web";
import nodata from "../images/nodata.json";
import GoHomeButton from "../components/GoHomeButton";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      lineHeight: "20px",
    },
    typography: {
      fontSize: "clamp(1.5rem,6vw,2rem)",
      fontFamily: "Montserrat, sans-serif",
      fontWeight: theme.typography.fontWeightMedium,
      maxWidth: "800px",
      margin: "auto",
    },
  };
});

function ErrorPage() {
  const classes = useStyles();
  let animated = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: animated.current,
      animationData: nodata,
    });
  }, []);
  return (
    <Box mt="10px" height="90vh" maxWidth="90%" mx="auto">
      <Grid
        container
        // direction="column"
        alignItems="center"
        justify="center"
        style={{ height: "100%", width: "100%" }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Opps
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box height="40vh" ref={animated}></Box>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            align="center"
            className={classes.typography}
          >
            We might ran out of questions in our database please go back and
            choose other category or select less questions
          </Typography>
        </Grid>
        <GoHomeButton btnName="Go Home" />
      </Grid>
    </Box>
  );
}

export default ErrorPage;
