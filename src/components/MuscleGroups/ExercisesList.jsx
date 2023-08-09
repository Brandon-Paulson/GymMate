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
        <h3>For gaining muscle mass, recommended 6-8 reps (heavy weight)</h3>
        <h3>For gaining lean muscle/weight loss, recommended 12-15 reps (lighter weight)</h3>
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
