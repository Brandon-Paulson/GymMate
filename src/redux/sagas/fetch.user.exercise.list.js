import { takeLatest, put } from "redux-saga/effects";

const userDate = localStorage.getItem("date");

const newDate= userDate.replaceAll('/', '-')


function* fetchSelectedExerciseSaga() {
    try {
        console.log('WHAT IS THE API DATE', newDate)
        const response = yield fetch(`api/users_selection/${newDate}`);
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        const exercises = yield response.json();
        yield put({ type: 'SET_SELECTED_EXERCISES', payload: exercises });
    }    catch(error) {
        console.log('Adding an exercises failed', error);
      }
    yield takeLatest('FETCH_SELECTED_EXERCISE', fetchSelectedExerciseSaga);

}



export default fetchSelectedExerciseSaga;