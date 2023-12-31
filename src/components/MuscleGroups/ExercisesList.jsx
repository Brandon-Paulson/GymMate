import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExercisesListItem from '../MuscleGroups/ExercisesListItem';
import { Button } from '@mui/material';
import { useLocation } from 'react-router'


function ExercisesList() {
  const dispatch = useDispatch();
  const location = useLocation();


  let exerciseList = useSelector(store => store.exercises);
  var path = window.location.href;
  var parts = path.split('/');
  var muscle = parts.pop() || parts.pop();


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
        {/* Render each item from the getExercises reducer */}
        {exerciseList.map((exercise, i) => {
          return <ExercisesListItem key={i} exercise={exercise} />;
        })}
      </div>
      <Button href="./" variant="contained">Return to Home</Button>
    </>
  );
}

export default ExercisesList;
