import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
        <h3>Recommended to complete 3-4 sets per exercise</h3> 
        <h3>Exercises should be based off of your 1-rep maximum weight where low repetitions should be ~85% of your 1 rep max and high repetitions being from 50-75% of your 1 rep maximum. </h3>
        <h3>For gaining muscle mass, recommended 6-8 reps (heavy weight)</h3>
        <h3>For gaining lean muscle/weight loss, recommended 12-15 reps (lighter weight)</h3>
     </div>
  );
}

export default InfoPage;
