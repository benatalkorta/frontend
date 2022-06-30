import React, { useState } from "react";
import { Form, Field, useFormikContext } from 'formik'
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import CheckBox from '@mui/material/Checkbox';
import { postDeleteStudent } from '../../../api/postDeleteStudent';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from '@mui/material/InputAdornment';

const DialogDelete = () => {
  const [open, setOpen] = React.useState(false);
  
  const handleClickToOpen = () => {
    setOpen(true);
  };
  
  const handleToClose = () => {
    setOpen(false);
  };


  const [delete_first_name, setDelete_first_name] = useState("");
  const [delete_last_name, setDelete_last_name] = useState("");
  const [delete_id, setDelete_id] = useState("");


  return (
    <div>
      <button
        className="button_add_delete"
        disabled= {localStorage.getItem("username")=="student"}
        onClick={handleClickToOpen}>
        Delete student      </button>
      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{"Delete Student"}</DialogTitle>
        <DialogContent id="grid-container">
          <TextField onChange={(e) => {setDelete_id(e.target.value);}}value={delete_id} type="text" label="ID" name="id" autoFocus required />
          <TextField onChange={(e) => {setDelete_first_name(e.target.value);}}value={delete_first_name} type="text" label="First name" name="first name" autoFocus required />
          <TextField onChange={(e) => {setDelete_last_name(e.target.value);}} value={delete_last_name} type="text" label="Last name" name="last name" autoFocus required />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToClose} 
                  color="primary" autoFocus>
                  Close
          </Button>
          <Button onClick={handleSubmit}
                  color="primary" autoFocus>
                  Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    
  );
  async function handleSubmit() {
    
    setOpen(false)
    const response = await postDeleteStudent(delete_id,delete_first_name, delete_last_name);
  }
}
export default DialogDelete;