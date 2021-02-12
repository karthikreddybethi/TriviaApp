import { Box, Grid } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import loading from "../images/loading.json";

function Loading() {
  let animatedLoading = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: animatedLoading.current,
      animationData: loading,
    });
  }, []);
  return (
    <Box>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Box width="50%" height="90vh" mx="auto" ref={animatedLoading}></Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Loading;
