import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      maxWidth: 300,
      padding: "0.8rem",
      marginBottom: "16px",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "initial",
      },
    },
    image: {
      objectFit: "contain",
    },
  };
});

export default function Cards({ cardName, cardImage }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={cardImage}
          title={cardImage}
          className={classes.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {cardName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
