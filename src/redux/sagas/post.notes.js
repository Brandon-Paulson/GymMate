import { put, takeEvery } from 'redux-saga/effects';

function* addNotes(action){
    try {
      yield fetch('/api/user_notes', {
        method: 'POST',
        body: JSON.stringify(action.payload.notes),
        headers: {'Content-Type' : 'application/json'}
      })
      yield put ({ type: 'SET_NOTES' })
    }
    catch(error) {
      console.log('Adding an exercises failed', error);
    }
  }
   
  function* addNotesSagas() {
    yield takeEvery('EDIT_SELECTED_NOTES', addNotes);
  }

  export default addNotesSagas;