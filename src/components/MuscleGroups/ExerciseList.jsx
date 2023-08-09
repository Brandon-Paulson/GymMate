// import { Input, Radio, Button, TextField } from '@mui/material';
// import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// function ExerciseList() {
//     const [exerciseList, setExerciseList] = useState([]);
//     const [userExerciseList, setUserExerciseList]= useState([]);

//     var path = window.location.href;
//     var parts = path.split('/');
//     var muscle = parts.pop() || parts.pop();

//     const url = 'https://api.api-ninjas.com/v1/exercises?muscle=';

//     useEffect(() => {
//         getExercises();
//     }, []);

//     function getExercises() {
//         return fetch(url + muscle, {
//             method: 'GET',
//             headers: {
//                 // 'X-Api-Key': process.env.REACT_APP_EXERCISE_API_KEY,
//                 'Content-Type': 'application/json'
//             }
//         })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(exerciseList => {
//                 setExerciseList(exerciseList);
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             })
//     };
 
//     return (
//         exerciseList.map(exercises => {
//             return <div className="responsive" key={exercises.id}>
//                 <div className="exercise">
//                     <h1>{exercises.name}</h1> <br/>
//                     <h3> {exercises.equipment} </h3> <br/>
//                     <div> How to do the Exercise: <br/> {exercises.instructions}</div>
//                     <div style={{ textAlign: 'center', padding: '5px' }}>
//                         <form>
//                         <Input placeholder="Desired Repetitions" id="filled-basic" label="Filled" variant="filled" type="number"/>
//                         <Button variant="contained">Add to List</Button>   
//                         </form>
//                     </div>
//                 </div>

//             </div>
//         }))
// };

// // export default ExerciseList;