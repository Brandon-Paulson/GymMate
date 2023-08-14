import React, { useEffect, useState, useContext, createContext } from 'react';
import DialogueBox from '../DialogueBox/DialogueBox';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useDispatch } from 'react-redux';
import DisplaySelection from '../DisplayUserSelection/DisplaySelection';
import { Grid } from '@mui/material';

function UserPage({onQuery}) {

  const dispatch = useDispatch();
  // const [dateValue, setDateValue] = useState('')
  const user = useSelector((store) => store.user);

  // let date=dateValue.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear(); 
  // setDateValue(date);

  // let selectedDate = [ dateValue.$y, dateValue.$M, dateValue.$D]




  // setter(dateValue);
 function handleDateChange(event) {
// onQuery(event.$d);
dispatch({ type: 'SET_DATE', payload:event.$d })
dispatch({ type: 'FETCH_SELECTED_EXERCISE'}) };


  return (
    <>
    <Grid container spacing={2}>
    <Grid item xs={6}> 
     <DisplaySelection/>
     </Grid>
     <Grid item xs={2}> 
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <StaticDatePicker format="dd/MM/yyyy" onChange={handleDateChange} orientation="portrait" label={'none'}/>
    {/* <StaticDatePicker onChange={(newValue)=> {setDateValue(newValue)}} onClick={handleClick} orientation="portrait"/> */}
    <DialogueBox/>
    </LocalizationProvider>
    </Grid>
    </Grid>
      </>
      
  );
}
// this allows us to use <App /> in index.js
export default UserPage;
