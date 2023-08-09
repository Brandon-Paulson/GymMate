import React from 'react';

function ExercisesListItem({ exercises }) {
  // Renders the list of exercises
  return (
    <div className="exercise">
                    <h1>{exercises.name}</h1> <br/>
                    <h3> {exercises.equipment} </h3> <br/>
                    <div> How to do the Exercise: <br/> {exercises.instructions}</div>
                    <div style={{ textAlign: 'center', padding: '5px' }}>
                        <form>
                        <Input placeholder="Desired Repetitions" id="filled-basic" label="Filled" variant="filled" type="number"/>
                        <Button variant="contained">Add to List</Button>   
                        </form>
                    </div>
                </div>
  );
}

export default ExercisesListItem;
