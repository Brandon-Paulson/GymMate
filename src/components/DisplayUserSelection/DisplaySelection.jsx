import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function DisplaySelection({ data }) {
    return (
        <Card>
            <section >
                <h1>Exercises For The Day: </h1>
                {data?.map(exercise => {
                    return (
                        <div key={exercise.id}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    <Typography component={'span'}>
                                        {exercise.exercise_name}
                                    </Typography>
                                    <Typography component={'span'}>
                                        {exercise.equipment}
                                    </Typography> <br></br>
                                    <Typography component={'span'}>
                                        Repetitions:
                                        {exercise.repetitions}
                                    </Typography>

                                </Typography>
                            </CardContent>
                            {/* Will use these for card notes */}
                            {/* <CardActions>
                            <Button size="small">Edit Note</Button>
                            <Button size="small">Delete Note</Button>
                        </CardActions> */}
                        </div>
                    )
                }
                )}
            </section>
        </Card>
    );
}