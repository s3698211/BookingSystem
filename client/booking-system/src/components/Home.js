import { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import StadiumsDashboard from "./Stadiums/StadiumsDashBoard";
import Form from "./Form/Form";
import useStyles from "../styles";
import { getStadiums } from "../actions/stadiumsAction";
const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStadiums());
  }, []);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Stadiums
        </Typography>
        <img
          className={classes.image}
          src={process.env.PUBLIC_URL + "/562674.png"}
          alt="OKLAH"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <StadiumsDashboard />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Home;
