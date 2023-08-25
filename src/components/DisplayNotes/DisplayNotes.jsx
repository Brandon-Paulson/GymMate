import * as React from 'react';
import Card from '@mui/material/Card';
import { Button, FormControl, Input, Popover, CardActions, CardContent, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


export default function DisplayNotes({ data }) {
    const dispatch = useDispatch();
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
        const deleteNote = { user_selected_date: userDate, notes: noteEdits, user_id: userInfo }
        fetch(`/api/user_notes`, {
            method: 'DELETE',
            body: JSON.stringify(deleteNote),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(() => {
                dispatch({ type: 'FETCH_SELECTED_NOTES' })
            })
            .catch(error => {
                console.log('error with element get request', error);
            })
    };

    const handleEdit = () => {
        const editNote = { user_selected_date: userDate, notes: noteEdits, user_id: userInfo }
        fetch(`/api/user_notes`, {
            method: 'PUT',
            body: JSON.stringify(editNote),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(() => {
                setNoteEdits('')
                dispatch({ type: 'EDIT_SELECTED_NOTES' })
            })
            .catch(error => {
                console.log('error with element get request', error);
            });
    };

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
                            <CardActions>
                                <Button onClick={handleClick} variant="contained" startIcon={<EditIcon />}>Edit </Button>
                                <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
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