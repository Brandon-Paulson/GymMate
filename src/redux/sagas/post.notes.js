function* addNotesSagas(action){
    try {
      yield fetch('/api/user_notes', {
        method: 'POST',
        body: JSON.stringify(action.payload),
        headers: {'Content-Type' : 'application/json'}
      })
      yield put ({ type: 'SET_NOTES' })
    }
    catch(error) {
      console.log('Adding an exercises failed', error);
    }
  }


  export default addNotesSagas;