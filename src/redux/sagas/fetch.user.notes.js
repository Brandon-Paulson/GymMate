import { takeEvery, put, takeLatest } from "redux-saga/effects";

function* fetchNotes() {
    const userDate = localStorage.getItem("date");
    const newDate = userDate.replaceAll('/', '-') ;
    const localUser = localStorage.getItem("user");
    try {
        const response = yield fetch(`api/user_notes/${newDate}/${localUser}`);
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        const notes = yield response.json();
        yield put({ type: 'SET_NOTES', payload: notes });
    } catch (error) {
        console.log('Adding Notes failed', error);
    }
    // yield takeLatest('FETCH_SELECTED_NOTES', fetchUserNotes);

}

function* fetchUserNotes() {
    yield takeEvery('FETCH_SELECTED_NOTES', fetchNotes);
  }

export default fetchUserNotes;