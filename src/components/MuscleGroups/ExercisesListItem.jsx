import React from 'react';
import { Input, Button } from '@mui/material';

function ExercisesListItem({exercise}) {
  // Renders the list of exercises
  return (
    <div> 
      <h1>{exercise.name}</h1>
      <h3> {exercise.equipment} </h3> 
      <div> How to do the Exercise: {exercise.instructions}</div> <br/>
      <div style={{ textAlign: 'center', padding: '5px' }}>
        <form>
          <Input placeholder="Desired Repetitions" id="filled-basic" label="Filled" variant="filled" type="number" />
          <Button variant="contained">Add to List</Button>
        </form>
      </div>
    </div>
  );
}

export default ExercisesListItem;
