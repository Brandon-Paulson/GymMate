import React from 'react';
import { Input, Button, FormControl, Box, Modal } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';

function ExercisesListItem({exercise}) {
  const [repetitions, setRepetitions] = useState([])
  const user = useSelector((store) => store.user);
  const userDate = localStorage.getItem("date");
  const userInfo = localStorage.getItem("user");
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);  

const handleClick = () => {
  var path = window.location.href;
  var parts = path.split('/');
  var muscle = parts.pop() || parts.pop();
  const exercisePayload={exercise_name: exercise.name, exercise_equipment: exercise.equipment, repetitions, user_selected_date: userDate, user_id: userInfo}
  console.log( 'WHAT IS EXERCISE PAYLOAD', exercisePayload);
  fetch(`/api/${muscle}`, {
  method: 'POST',
  body: JSON.stringify(exercisePayload),
  headers: {'Content-Type' : 'application/json'}})
  .then(() => {
})
.catch(error => {
    console.log('error with element get request', error);
});
}

  // Renders the list of exercises
  return (
    <div> 
      <h1>{exercise.name}</h1>
      <h3> Equipment: {exercise.equipment} </h3> 
      {/* <div> How to do the Exercise: {exercise.instructions}</div> <br/> */}
      <Button variant="contained" onClick={handleOpen}>How to do the exercise</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Instructions: {exercise.instructions}
          </Typography>
        </Box>
      </Modal>
    
      <div style={{ textAlign: 'center', padding: '5px' }}>
        <FormControl className="Repetitions">
          <Input placeholder="Desired Repetitions" id="filled-basic" label="Filled" variant="filled" type="number" 
          onChange={event => setRepetitions(event.target.value)} value={repetitions}/>
           <Button onClick={handleClick} variant="contained">Add Exercise</Button>
        </FormControl>
      </div>
    </div>
  );
}

export default ExercisesListItem;
