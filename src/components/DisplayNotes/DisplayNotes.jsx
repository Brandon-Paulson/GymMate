import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


// const selectedExercisestoDisplay = useSelector((store) => store.selectedExercices)
// console.log('THIS IS THE DISPLAY EXERCISE SELECTIONS', selectedExercisestoDisplay)

export default function DisplayNotes() {
    return (
        <Card>
        <section >
        <h1>Notes For The Day: </h1>   
         
        </section>
        <Button>Edit Note</Button>
        <Button>Delete Note</Button>
        </Card>
    );
}

// {data?.map(exercise => {
//     return (
//         <div key={exercise.id}>
//             <CardContent>
//                 <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                     <Typography component={'span'}>                     
//                         {exercise.exercise_name} 
//                     </Typography>
//                     <Typography component={'span'}>                     
//                     {exercise.equipment}
//                     </Typography> <br></br>                  
//                     <Typography component={'span'}> 
//                     Repetitions:                    
//                     {exercise.repetitions}
//                     </Typography>                     

//                 </Typography>
//             </CardContent>
//             {/* Will use these for card notes */}
//             {/* <CardActions>
//                 <Button size="small">Edit Note</Button>
//                 <Button size="small">Delete Note</Button>
//             </CardActions> */}
//         </div>
//     )
// }
// )}