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
import { postInsertStudent } from '../../../api/postInsertStudent';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from '@mui/material/InputAdornment';

const DialogInsert = () => {
  const [open, setOpen] = React.useState(false);
  
  const handleClickToOpen = () => {
    setOpen(true);
  };
  
  const handleToClose = () => {
    setOpen(false);
  };

  const [id, setId] = useState("");
  const [buddy, setBuddy] = useState("");
  const [contract_from, setContract_from] = useState("");
  const [contract_till, setContract_till] = useState("");
  const [desk, setDesk] = useState("");
  const [sent_email, setSent_email] = useState(false);
  const [first_name, setFirst_name] = useState("");
  const [added_about_us, setAdded_about_us] = useState(false);
  const [last_name, setLast_name] = useState("");
  const [living_place, setLiving_place] = useState("");
  const [nationality, setNationality] = useState("");
  const [order_number, setOrder_number] = useState("");
  const [university, setUniversity] = useState("");
  const [work_type, setWork_type] = useState("");
  const [working_days, setWorking_days] = useState("");
  const [working_hours, setWorking_hours] = useState(0);
  const [absence_list, setAbsence_list] = useState(false);
  const [access_intranet_folders, setAccess_intranet_folders] = useState(false);
  const [cdas_received, setCdas_received] = useState(false);
  const [first_day_email, setFirst_day_email] = useState(false);
  const [homepage_folder, setHomepage_folder] = useState(false);
  const [loan_collected, setLoan_collected] = useState(false);
  const [outlook_distribution_list, setOutlook_distribution_list] = useState(false);
  const [picture, setPicture] = useState(false);
  const [welcome_email, setWelcome_email] = useState(false);
  const [windows_account, setWindows_account] = useState(false);





  return (
    <div>
      <button
        className="button_add_delete"
        disabled= {localStorage.getItem("username")=="student"}
        onClick={handleClickToOpen}>
        Add student
      </button>
      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{"Add student"}</DialogTitle>
        <DialogContent id="grid-container">
          <TextField onChange={(e) => {setId(e.target.value);}}value={id} type="text" label="ID" name="ID" autoFocus required />
          <TextField onChange={(e) => {setFirst_name(e.target.value);}}value={first_name} type="text" label="First name" name="first name" autoFocus required />
          <TextField onChange={(e) => {setLast_name(e.target.value);}} value={last_name} type="text" label="Last name" name="last name" autoFocus required />
          <TextField onChange={(e) => {setNationality(e.target.value);}}value={nationality} type="text" label="Nationality" name="nationality" autoFocus required />
          <TextField onChange={(e) => {setLiving_place(e.target.value);}}value={living_place} type="text" label="Living place" name="living place" autoFocus required />
          <TextField onChange={(e) => {setContract_from(e.target.value);}}value={contract_from} InputLabelProps={{ shrink: true }} type="date" label="Contract from" name="contract from" autoFocus required />
          <TextField onChange={(e) => {setContract_till(e.target.value);}}value={contract_till} InputLabelProps={{ shrink: true }} type="date" label="Contract till" name="contract till" autoFocus required />
          <TextField onChange={(e) => {setWork_type(e.target.value);}}value={work_type} type="text" label="Work type" name="work type" autoFocus required />
          <TextField onChange={(e) => {setWorking_days(e.target.value);}}value={working_days} type="text" label="Working days" name="working days" helperText="e.g. M,T,W,T,F" autoFocus />
          {/* <TextField onChange={(e) => {setWorking_hours(e.target.);}}value={working_hours} InputProps={{startAdornment: <InputAdornment position="end">hours/week</InputAdornment>,}} type="number" label="Working hours" name="working hours" placeholder="working hours" autoFocus /> */}
          <TextField onChange={(e) => {setBuddy(e.target.value);}} value={buddy} type="text" label="Buddy" name="buddy" autoFocus required />
          <TextField onChange={(e) => {setDesk(e.target.value);}}value={desk} type="text" label="Desk" name="desk" autoFocus />
          <TextField onChange={(e) => {setOrder_number(e.target.value);}}value={order_number} type="text" label="Order number" name="order number" autoFocus required />
          <TextField onChange={(e) => {setUniversity(e.target.value);}}value={university} type="text" label="University" name="university" autoFocus required />

          <FormControlLabel control={<CheckBox checked={sent_email} onChange={(e) => {setSent_email(e.target.checked);}}/>} label="Sent email to buddies" />
          <FormControlLabel control={<CheckBox checked={added_about_us} onChange={(e) => {setAdded_about_us(e.target.checked);}}/>} label="Is added on About Us" />
          <FormControlLabel control={<CheckBox checked={absence_list} onChange={(e) => {setAbsence_list(e.target.checked);}}/>} label="Has absence list" />
          <FormControlLabel control={<CheckBox checked={access_intranet_folders} onChange={(e) => {setAccess_intranet_folders(e.target.checked);}}/>} label="Has access to Intranet folders" />
          <FormControlLabel control={<CheckBox checked={cdas_received} onChange={(e) => {setCdas_received(e.target.checked);}}/>} label="Has Cdas received" />
          <FormControlLabel control={<CheckBox checked={first_day_email} onChange={(e) => {setFirst_day_email(e.target.checked);}}/>} label="Has received first day email on personal email" />
          <FormControlLabel control={<CheckBox checked={homepage_folder} onChange={(e) => {setHomepage_folder(e.target.checked);}}/>} label="Has homepage folder" />
          <FormControlLabel control={<CheckBox checked={loan_collected} onChange={(e) => {setLoan_collected(e.target.checked);}}/>} label="Has loan collected" />
          <FormControlLabel control={<CheckBox checked={outlook_distribution_list} onChange={(e) => {setOutlook_distribution_list(e.target.checked);}}/>} label="Has outlook distribution list" />
          <FormControlLabel control={<CheckBox checked={picture} onChange={(e) => {setPicture(e.target.checked);}}/>} label="Has picture" />
          <FormControlLabel control={<CheckBox checked={welcome_email} onChange={(e) => {setWelcome_email(e.target.checked);}}/>} label="Has received welcome email" />
          <FormControlLabel control={<CheckBox checked={windows_account} onChange={(e) => {setWindows_account(e.target.checked);}}/>} label="Has windows account" />

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
    const response = await postInsertStudent(first_name, last_name, id);
  }
}
export default DialogInsert;