import { put, takeEvery } from 'redux-saga/effects';

var path = window.location.href;
var parts = path.split('/');
var muscle = parts.pop() || parts.pop();
const url = 'https://api.api-ninjas.com/v1/exercises?muscle=';

function* addExercises(action){
    try {
      yield fetch(url + muscle, {
        method: 'POST',
        body: JSON.stringify(action.payload.exercise_name, action.payload.exercise_equipment, action.payload.repetitions),
        headers: {'Content-Type' : 'application/json'}
      })
      yield put ({ type: 'FETCH_SELECTED_EXERCISES' })
    }
    catch(error) {
      console.log('Adding an exercises failed', error);
    }
  }


  function* addExercisesSaga() {
    yield takeEvery('ADD_SELECTED_EXERCISE', addExercises);
  }

  export default addExercisesSaga;    