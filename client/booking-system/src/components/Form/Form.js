import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { createStadium } from "../../actions/stadiumsAction";

const Form = () => {
  const [stadiumData, setStadiumData] = useState({
    id: "",
    name: "",
    image: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createStadium(stadiumData));
  };
  const clear = () => {};
  return (
    <Paper>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Stadium</Typography>

        <TextField
          name="name"
          variant="outlined"
          label="Stadium Name"
          fullWidth
          value={stadiumData.name}
          onChange={(e) => {
            setStadiumData({ ...stadiumData, name: e.target.value });
          }}
        />
        <div classname={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setStadiumData({ ...stadiumData, image: base64 })
            }
          />
          <br />
        </div>

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          type="submit"
        >
          Created
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
