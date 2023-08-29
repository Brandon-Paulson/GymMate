import React from 'react';
import { Input, Button, FormControl, Box, Modal, Card, CardContent, Grid } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import './ExerciseListItem.css';
import { useDispatch } from 'react-redux';

function ExercisesListItem({ exercise }) {
  const [repetitions, setRepetitions] = useState([])
  const user = useSelector((store) => store.user);
  const dispatch= useDispatch();
  const userDate = localStorage.getItem("date");
  const userInfo = localStorage.getItem("user");
  const style = {
    position: 'absolute',
    top: '65%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 750,
    overflow: scroll,
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
    const exercisePayload = { exercise_name: exercise.name, exercise_equipment: exercise.equipment, repetitions, user_selected_date: userDate, user_id: userInfo }
    console.log('WHAT IS EXERCISE PAYLOAD', exercisePayload);
    fetch(`/api/${muscle}`, {
      method: 'POST',
      body: JSON.stringify(exercisePayload),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        dispatch({type: 'ADD_SELECTED_EXERCISES'})
      })
      .catch(error => {
        console.log('error with element get request', error);
      });
  }

  // Renders the list of exercises
  return (
    <div>
      <Box align='center' >
        <Grid columns={12} marginLeft="5px" padding="5px">
          <Card sx={{ width: 350, border: 1 }} className="exerciseComponent">
            <Grid item xs={6}>
              <CardContent>
                <Typography variant="h4">{exercise.name}</Typography>
                <Typography variant='h6'> Equipment: {exercise.equipment} </Typography>
                {/* <div> How to do the Exercise: {exercise.instructions}</div> <br/> */}
                <Button className="instructionButton" variant="contained" onClick={handleOpen}>Exercise Instructions</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  style={{ overflow: "auto" }}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" sx= {2} variant="h6" component="h2">
                      Instructions: {exercise.instructions}
                    </Typography>
                  </Box>
                </Modal>

                <div style={{ textAlign: 'center', padding: '25px' }}>
                  <FormControl className="Repetitions">
                    <Input placeholder="Desired Repetitions" id="filled-basic" label="Filled" variant="filled" type="number"
                      onChange={event => setRepetitions(event.target.value)} value={repetitions} />
                    <Button className="repButton" onClick={handleClick} variant="contained">Add Exercise</Button>
                  </FormControl>
                </div>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
      </Box>
    </div>
  );
}

export default ExercisesListItem;
