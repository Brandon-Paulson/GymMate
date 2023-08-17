import { takeLatest, put } from "redux-saga/effects";

function* fetchSelectedExerciseSaga() {
    const userDate = localStorage.getItem("date");
    const newDate = userDate.replaceAll('/', '-') ;
    const localUser = localStorage.getItem("user");
    try {
        const response = yield fetch(`api/users_selection/${newDate}/${localUser}`);
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        const exercises = yield response.json()
        console.log('WHAT IS THE SELECTED EXERCISES', exercises)
        yield put({ type: 'SET_SELECTED_EXERCISES', payload: exercises })
    } catch (error) {
        console.log('Adding an exercises failed', error);
    }
    yield takeLatest('FETCH_SELECTED_EXERCISE', fetchSelectedExerciseSaga);

}



export default fetchSelectedExerciseSaga;