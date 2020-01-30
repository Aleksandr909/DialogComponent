// @flow
import React from "react";
import { TextField, Grid } from "@material-ui/core";
import SelectForm from "./SelectForm";
import inputHandler from "../store/actions/inputHandler";
import { useSelector, useDispatch } from "react-redux";

const FormRow = ({ value, index }) => {
  const dispatch = useDispatch();
  const values = useSelector(state => state.dialog.values);

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ marginTop: 20, display: "flex", flexGrow: 1 }}
    >
      <Grid item xs={9}>
        <TextField
          label={`Field ${index + 1}`}
          variant="outlined"
          value={value}
          onChange={event => dispatch(inputHandler(event, values, index))}
          fullWidth
        />
      </Grid>
      <Grid item xs={3}>
        <SelectForm index={index} />
      </Grid>
    </Grid>
  );
};

export default FormRow;
