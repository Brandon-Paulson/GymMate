import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {Button, FormControl, Input, Popover} from '@mui/material';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';

// const selectedExercisestoDisplay = useSelector((store) => store.selectedExercices)
// console.log('THIS IS THE DISPLAY EXERCISE SELECTIONS', selectedExercisestoDisplay)



export default function DisplayNotes({ data }) {
const [anchorEl, setAnchorEl] = React.useState(null);
const [noteEdits, setNoteEdits] = useState([]);
const userDate = localStorage.getItem("date");
const userInfo = localStorage.getItem("user");      

const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

const handleClose = () => {
    setAnchorEl(null);
  };
    
const open = Boolean(anchorEl);

const id = open ? 'simple-popover' : undefined;

const handleDelete = () => {
//NEED TO WRITE THIS
};

const handleEdit = () => {
    const editNote={user_selected_date: userDate, notes: noteEdits, user_id: userInfo}
    fetch(`/api/user_notes`, {
    method: 'PUT',
    body: JSON.stringify(editNote),
    headers: {'Content-Type' : 'application/json'}})
    .then(() => {
  })
  .catch(error => {
      console.log('error with element get request', error);
  });
  };

    console.log('what is display section data', data);
    return (
        <Card>
            <section >
                <h1>Notes For The Day: </h1>
                {data?.map(note => {
                    return (
                        <div key={note.id}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    <Typography component={'span'}>
                                        {note.notes}
                                    </Typography>
                                </Typography>
                            </CardContent>
                            {/* Will use these for card notes */}
                            <CardActions>
                            <Button onClick= {handleClick} variant="contained" startIcon={<EditIcon />}>Edit </Button> 
                                <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{  vertical: 'bottom', horizontal: 'left'}}
        >                                        <FormControl className="Edit_Note">
                                            <Input multiline maxRows={4} placeholder="Notes For The Day" id="filled-basic" label="Filled" variant="filled" type="text"
                                                onChange={event => setNoteEdits(event.target.value)} value={noteEdits} />
                                            <Button onClick={handleEdit} variant="contained">Submit Edits</Button>
                                        </FormControl>
                                    </Popover> 
                                    <Button onClick={handleDelete} variant="contained" startIcon={<DeleteIcon />}>Delete</Button>                                     
                            </CardActions>
                        </div>
                    )
                }
                )}
            </section>
        </Card>
    )
}