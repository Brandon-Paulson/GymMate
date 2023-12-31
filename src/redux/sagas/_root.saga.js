import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import fetchExerciseSaga from './exercise.saga';
import addExercisesSaga from './selected.exercises';
import addNotesSagas from './post.notes';
import fetchSelectedExerciseSaga from './fetch.user.exercise.list';
import fetchUserNotes from './fetch.user.notes';
import editNotesSagas from './edit.notes';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    fetchExerciseSaga(),
    addExercisesSaga(),
    fetchSelectedExerciseSaga(),
    addNotesSagas(),
    fetchUserNotes(),
    editNotesSagas(),
  ]);
}
