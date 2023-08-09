import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExercisesListItem from '../MuscleGroups/ExercisesListItem';


function ExercisesList() {
  const dispatch = useDispatch();
  let exerciseList = useSelector(store => store.exercises);

  // on load, dispatch the saga action
  useEffect(() => {
    console.log('in useEffect');
    const action = { type: 'GET_EXERCISES' };
    dispatch(action);
  }, []);

  // Renders the list of exercises
  return ( 
      <div>
        {/* Render each item from the getExercises reducer */}
        {exerciseList.map((exercises, i) => {
          return <ExercisesListItem key={i} classData={exercises} />;
        })}
      </div>
  );
}

export default ExercisesList;
