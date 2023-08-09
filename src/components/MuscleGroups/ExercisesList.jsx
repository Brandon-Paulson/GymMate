import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExercisesListItem from '../MuscleGroups/ExercisesListItem';
import { Button } from '@mui/material';

function ExercisesList() {
  const dispatch = useDispatch();
  let exerciseList = useSelector(store => store.exercises);

  console.log( 'WHAT IS THE STORE FOR EXERCISES', exerciseList);
  // on load, dispatch the saga action
  useEffect(() => {
    const action = { type: 'GET_EXERCISES' };
    dispatch(action);
  }, []);

  // Renders the list of exercises
  return ( 
    <>
      <div>
        {/* Render each item from the getExercises reducer */}
        {exerciseList.map((exercise, i) => {
          return <ExercisesListItem key={i} exercise={exercise} />;
        })}
      </div>
      <Button variant="contained">Submit</Button>
      </>
  );
}

export default ExercisesList;
