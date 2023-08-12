import React from 'react';
import { Input, Button, FormControl } from '@mui/material';
import { useState } from 'react';

function ExercisesListItem({exercise}) {
  // const [value, setValue] = useState([]);
  const [repetitions, setRepetitions] = useState([])
  const [userExercise, setUserExercise] = useState([])

  // const handleChange = (event) => {
  //   if (bool=true) { 
  //   setValue(event.target.value);
  //   }
  //   else {
  //     setValue('')
  //   }
  // };


  // const addExercises = () => {
  //   const exercisePayload={name: exercise.name, equipment: exercise.equipment, repetitions}
  //    dispatch ({type:'ADD_EXERCISE', payload: exercisePayload});
  //        setNewElement('');
    
  //  };


const handleClick = () => {
  var path = window.location.href;
  var parts = path.split('/');
  var muscle = parts.pop() || parts.pop();
  const exercisePayload={exercise_name: exercise.name, exercise_equipment: exercise.equipment, repetitions}
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


  const exerciseData= {
    name: exercise.name,
    equipment: exercise.equipment,
    repetitions: repetitions
  };

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
