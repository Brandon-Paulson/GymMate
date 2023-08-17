function* editNotesSagas(action){
    try {
      console.log('WHAT IS THE PAYLOAD FOR NOTES POST', action.payload)
      yield fetch('/api/user_notes', {
        method: 'PUT',
        body: JSON.stringify(action.payload.notes),
        headers: {'Content-Type' : 'application/json'}
      })
      yield put ({ type: 'SET_NOTES' })
    }
    catch(error) {
      console.log('Adding an exercises failed', error);
    }
  }
   

  export default editNotesSagas;