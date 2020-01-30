// @flow
import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tooltip
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import handleChange from "../store/actions/handleChange";

const SelectForm = ({ index }: number) => {
  const dispatch = useDispatch();

  const selectedKeys = useSelector(state => state.dialog.selectedKeys);

  const inputSelectedValue = Object.values(selectedKeys).findIndex(
    elem => elem === index
  );

  const RowSelectedValue = Object.keys(selectedKeys)[inputSelectedValue];

  const checkSelected = value => {
    return selectedKeys[value] !== undefined;
  };

  return (
    <FormControl style={{ display: "flex", flexGrow: 1 }}>
      <InputLabel id="demo-simple-select-label" />
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={RowSelectedValue}
        variant="outlined"
        onChange={event => dispatch(handleChange(event, selectedKeys, index))}
      >
        {Object.keys(selectedKeys).map(elem => (
          <MenuItem key={elem} value={elem} disabled={checkSelected(elem)}>
            <Tooltip title={`Please, enter your ${elem}`}>
              <span>{elem[0].toUpperCase() + elem.substring(1)}</span>
            </Tooltip>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectForm;
