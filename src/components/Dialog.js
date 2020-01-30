import React from "react";
import {
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";
import FormRow from "./FormRow";

const Dialog = props => {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose()}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <FormRow />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose()} color="primary">
          Show Table Prewiew
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Dialog;
