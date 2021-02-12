import Cards from "./Cards";
import CardData from "../data/data";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    boxContainer: {
      [theme.breakpoints.up("md")]: {
        height: "50vh",
        width: "100%",
      },
      [theme.breakpoints.down("md")]: {
        marginTop: "30px",
      },
      "& a": {
        textDecoration: "none",
      },
    },
    mainHeading: {
      margin: "20px 0 60px 0",
      [theme.breakpoints.down("md")]: {
        fontSize: "clamp(10px,8vw,30px)",
        margin: "20px 0 40px 0",
      },
    },
  };
});

export default function Categories() {
  let classes = useStyles();

  return (
    <Box className={classes.boxContainer} textAlign="center" mt="70px">
      <Typography variant="h4" align="center" className={classes.mainHeading}>
        Please Select Your Topic
      </Typography>
      <Box
        width="90%"
        mx="auto"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        flexWrap="wrap"
      >
        {CardData.map((data, index) => {
          return (
            <NavLink key={index} to={data.path}>
              <Cards cardName={data.title} cardImage={data.image} />
            </NavLink>
          );
        })}
      </Box>
    </Box>
  );
}
