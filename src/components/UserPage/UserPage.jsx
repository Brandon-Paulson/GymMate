import React, { useState } from 'react';
import DialogueBox from '../DialogueBox/DialogueBox';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


function UserPage() {

  const [dateValue, setDateValue] = useState('')
  const user = useSelector((store) => store.user);
  console.log(dateValue);
  return (
    // <div className="container">
    //   <h2>Welcome, {user.username}!</h2>
    //   <p>Your ID is: {user.id}</p>
    //   <LogOutButton className="btn" />
    // </div>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <StaticDatePicker onChange={(newValue)=> {setDateValue(newValue.$d)}} orientation="portrait"/>
    <DialogueBox/>
  </LocalizationProvider>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
