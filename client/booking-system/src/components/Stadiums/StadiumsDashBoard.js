import React from "react";
import Stadium from "./Stadium/Stadium";
import useStyles from "./styles";

const StadiumsDashBoard = () => {
  const classes = useStyles();
  return (
    <>
      <h1>DashBoard</h1>
      <Stadium />
      <Stadium />
    </>
  );
};

export default StadiumsDashBoard;
