import React from 'react';
import {Card, Typography, CardContent} from '@mui/material'

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <Card>
        <CardContent>
        <Typography variant = "h5">Goal One: Gaining Muscle Mass: recommended 6-8 reps (Heavy Weight)</Typography> <br/>
        <Typography variant = "h5">Goal Two: Gaining Lean Muscle/Weight Loss recommended 12-15 reps (Lighter Weight)</Typography> <br/>
        <Typography variant="h5">Recommended to complete 3-4 sets per exercise</Typography> 
        <Typography>Exercises should be based off of your 1-rep maximum weight. Low repetitions (6-8) should be ~85% of your 1 rep maximum, while high repetitions (12-15) should be 50-75% of your 1 rep maximum. </Typography> <br/>
        </CardContent>
        </Card>
     </div>

  );
}

export default InfoPage;
