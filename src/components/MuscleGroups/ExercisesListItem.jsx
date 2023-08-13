import React, { useEffect } from 'react';
import { Input, Button, FormControl } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function ExercisesListItem({exercise}) {
  // const [value, setValue] = useState([]);
  const [repetitions, setRepetitions] = useState([])
  const user = useSelector((store) => store.user);

  const userDate = localStorage.getItem("date");

const handleClick = () => {
  var path = window.location.href;
  var parts = path.split('/');
  var muscle = parts.pop() || parts.pop();
  const exercisePayload={exercise_name: exercise.name, exercise_equipment: exercise.equipment, repetitions, user_selected_date: userDate, user_id: user.id}
  console.log( 'WHAT IS EXERCISE PAYLOAD', exercisePayload);
  fetch(`/api/${muscle}`, {
  method: 'POST',
  body: JSON.stringify(exercisePayload),
  headers: {'Content-Type' : 'application/json'}})
  .then(() => {
})
.catch(error => {
    console.log('error with element get request', error);
});
}

  // Renders the list of exercises
  return (
    <div> 
      <h1>{exercise.name}</h1>
      <h3> Equipment: {exercise.equipment} </h3> 
      <div> How to do the Exercise: {exercise.instructions}</div> <br/>
      <div style={{ textAlign: 'center', padding: '5px' }}>
        <FormControl className="Repetitions">
          <Input placeholder="Desired Repetitions" id="filled-basic" label="Filled" variant="filled" type="number" 
          onChange={event => setRepetitions(event.target.value)} value={repetitions}/>
          {/* <Button variant="contained">Add to List</Button> */}
           {/* <FormControlLabel value={exercise.name} control={<Checkbox />} onChange={handleChange} label="Add Exercise" /> */}
           <Button onClick={handleClick} variant="contained">Add Exercise</Button>
        </FormControl>
      </div>
    </div>
  );
}

export default ExercisesListItem;
