import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
    This appliation was built utilizing React-Redux, with Passport Authentication. 
    The utilization of PostgreSQL allows the user to track and make live updates
    to their fitness goals through global state redux-sagas. 
     </div>
  );
}

export default InfoPage;
