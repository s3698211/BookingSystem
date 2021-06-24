import React from "react";
import { useSelector } from "react-redux";

import Stadium from "./Stadium/Stadium";
import useStyles from "./styles";

const StadiumsDashBoard = () => {
  const stadiums = useSelector((state) => state.stadiums);
  const classes = useStyles();

  console.log(stadiums);
  return (
    <>
      <h1>DashBoard</h1>
      <Stadium />
      <Stadium />
    </>
  );
};

export default StadiumsDashBoard;
