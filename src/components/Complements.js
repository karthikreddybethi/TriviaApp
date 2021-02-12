import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      lineHeight: "20px",
    },
    typography: {
      fontSize: "clamp(1.5rem,6vw,2rem)",
      fontFamily: "Montserrat, sans-serif",
      fontWeight: theme.typography.fontWeightMedium,
    },
  };
});

function Complements({ complement, image }) {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      mb="10px"
    >
      <img src={image} alt={complement} width="300px" />{" "}
      <Typography variant="h2" className={classes.typography}>
        {complement}
      </Typography>
    </Box>
  );
}

export default Complements;
