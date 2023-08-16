import { takeLatest, put } from "redux-saga/effects";

function* fetchUserNotes() {
    const userDate = localStorage.getItem("date");

    const newDate = userDate.replaceAll('/', '-')
    try {
        console.log('WHAT IS THE API DATE', newDate)
        const response = yield fetch(`api/user_notes/${newDate}`);
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        const notes = yield response.json();
        yield put({ type: 'SET_NOTES', payload: notes });
    } catch (error) {
        console.log('Adding Notes failed', error);
    }
    yield takeLatest('FETCH_SELECTED_NOTES', fetchUserNotes);

}



export default fetchUserNotes;