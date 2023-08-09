import {takeEvery, put, take} from 'redux-saga/effects';

var path = window.location.href;
var parts = path.split('/');
var muscle = parts.pop() || parts.pop();
const url = 'https://api.api-ninjas.com/v1/exercises?muscle=';

function* fetchExerciseSaga() { 
    try {
    const response = yield fetch(url + muscle, {
        method: 'GET',
        headers: {
            'X-Api-Key': process.env.REACT_APP_EXERCISE_API_KEY,
            'Content-Type': 'application/json'
        }
    })
    const exerciseResponseList = yield response.json();
    yield put({ type: 'SET_EXERCISES', payload: exerciseResponseList});
  } catch (error) {
    console.log('error fetching elements', error);
  }}

// function* exerciseSaga() {
//     return fetch(url + muscle, {
//         method: 'GET',
//         headers: {
//             'X-Api-Key': process.env.REACT_APP_EXERCISE_API_KEY,
//             'Content-Type': 'application/json'
//         }
//     })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(exerciseList => {
//             setExerciseList(exerciseList);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         })
// };

export default fetchExerciseSaga;