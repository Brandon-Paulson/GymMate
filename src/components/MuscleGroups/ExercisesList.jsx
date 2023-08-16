import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExercisesListItem from '../MuscleGroups/ExercisesListItem';
import { Button } from '@mui/material';
import {useLocation} from 'react-router'


function ExercisesList() {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log('what is location',location);


  let exerciseList = useSelector(store => store.exercises);
  var path = window.location.href;
  var parts = path.split('/');
  var muscle = parts.pop() || parts.pop();


  console.log( 'WHAT IS THE STORE FOR EXERCISES', exerciseList);
  // on load, dispatch the saga action
  useEffect(() => {
    console.log('  HEY I AM RUNNING THE USE EFFECT');
    const action = { type: 'GET_EXERCISES' };
    dispatch(action);
  }, [location.pathname]);

  // Renders the list of exercises
  return ( 
    <>
      <div>
        <h3>For gaining muscle mass, recommended 6-8 reps (heavy weight)</h3>
        <h3>For gaining lean muscle/weight loss, recommended 12-15 reps (lighter weight)</h3>
        <h3>Recommended to complete 3-4 sets per exercise</h3> 
        {/* Render each item from the getExercises reducer */}
        {exerciseList.map((exercise, i) => {
          return <ExercisesListItem key={i} exercise={exercise} />;
        })}
      </div>
      <Button  href="./" variant="contained">Return to Home</Button>
      </>
  );
}

export default ExercisesList;
