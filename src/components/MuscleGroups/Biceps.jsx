import { Input, Radio, Button, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

function exerciseList() {
    const [exerciseList, setExerciseList] = useState([]);

    var path = window.location.href;
    var parts = path.split('/');
    var muscle = parts.pop() || parts.pop();

    const url = 'https://api.api-ninjas.com/v1/exercises?muscle=';

    useEffect(() => {
        getExercises();
    }, []);

    function getExercises() {
        return fetch(url + muscle, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'hm6uyj0pKiyzZbxKkO0p9A==MKbfeMylqvMkTrek',
                //unsure why the API Key is not reading
                // headers: {'X-Api-Key': process.env.REACT_APP_EXERCISE_API_KEY,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(exerciseList => {
                setExerciseList(exerciseList);
            })
            .catch(error => {
                console.error('Error:', error);
            })
    };
 
    return (
        exerciseList.map(bicepList => {
            return <div className="responsive" key={bicepList.id}>
                <div className="exercise">
                    <h1>{bicepList.name}</h1> <br/>
                    <h3> {bicepList.equipment} </h3> <br/>
                    <div> How to do the Exercise: <br/> {bicepList.instructions}</div>
                    <div style={{ textAlign: 'center', padding: '5px' }}>
                        <form>
                        <Radio style={{ cursor: 'pointer' }}></Radio>
                        <Input placeholder="Desired Repetitions" id="filled-basic" label="Filled" variant="filled" type="number"/>
                        <Button variant="contained">Add to List</Button>   
                        </form>
                    </div>
                </div>

            </div>

        }))
};

export default exerciseList;