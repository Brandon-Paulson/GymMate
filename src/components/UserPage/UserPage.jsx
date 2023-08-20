import React, { useEffect, useState, useContext, createContext } from 'react';
import DialogueBox from '../DialogueBox/DialogueBox';
import { useSelector } from 'react-redux';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useDispatch } from 'react-redux';
import DisplaySelection from '../DisplayUserSelection/DisplaySelection';
import { Grid } from '@mui/material';
import DisplayNotes from '../DisplayNotes/DisplayNotes';
import { position } from '@mui/system';

function UserPage() {

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.id);
  const selectedDateExercises = useSelector((store) => store.selectedExercices[0])
  const selectedDateNotes = useSelector((store) => store.notes[0])
  localStorage.setItem('user', JSON.stringify(user))

  function handleDateChange(event) {
    dispatch({ type: 'SET_DATE', payload: event.$d })
    dispatch({ type: 'FETCH_SELECTED_EXERCISE'})
    dispatch({type: 'FETCH_SELECTED_NOTES'})
  };


  return (
    <>
      <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <DisplaySelection data={selectedDateExercises} userID={user.id} />
          <DisplayNotes data={selectedDateNotes}/>
        </Grid>
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker format="dd/MM/yyyy" onChange={handleDateChange} orientation="portrait" label={'none'} />
            <DialogueBox date={selectedDateExercises}/>
          </LocalizationProvider>
        </Grid>
      </Grid>
    </>

  );
}
export default UserPage;
