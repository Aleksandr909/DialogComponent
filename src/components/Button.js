//@flow

import React from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import FormRow from "./FormRow";
import LoopIcon from "@material-ui/icons/Loop";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const values = useSelector(state => state.dialog.values);
  const selectedKeys = useSelector(state => state.dialog.selectedKeys);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Fields from uploaded CSV file
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please choose correct columns and click Show Table Preview to see
            your imported data. Send us your base file and we'll import it
            ourselves if you have any problems with that.
          </DialogContentText>
          {values.map((elem, index) => (
            <FormRow key={elem + index} value={elem} index={index} />
          ))}
        </DialogContent>
        <DialogActions>
          <Button
            style={{ display: "flex", flexGrow: 1 }}
            onClick={() => {
              handleClose();
              console.log(selectedKeys);

              return selectedKeys;
            }}
            variant="outlined"
            color="primary"
          >
            <LoopIcon />
            Show Table Prewiew
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
