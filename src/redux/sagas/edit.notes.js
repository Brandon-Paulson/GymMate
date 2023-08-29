import { put, takeEvery } from 'redux-saga/effects';

function* editNotes(action){
    try {
      yield fetch('/api/user_notes', {
        method: 'PUT',
        body: JSON.stringify(action.payload),
        headers: {'Content-Type' : 'application/json'}
      })
      yield put ({ type: 'FETCH_SELECTED_NOTES' })
    }
    catch(error) {
      console.log('Adding an exercises failed', error);
    }
  }
   
  function* editNotesSagas() {
    yield takeEvery('EDIT_SELECTED_NOTES', editNotes);
  }

  export default editNotesSagas;