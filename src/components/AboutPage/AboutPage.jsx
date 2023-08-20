import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
      GymMate is an application that helps people that are unfamiliar with 
      weightlifting, how to properly create a workout routine. 
      GymMate allows the user to create a personal plan for their fitness goals 
      without the need for a personal trainer. GymMate is both a scheduling 
      tool to help hold the user accountable for making it to the gym as well 
      as guiding the user to create a well-rounded workout to crush the body group 
      that they are wanting to workout during any given day.      
      </div>
      <br/>
      <div>
      
      This appliation was built utilizing React-Redux, with Passport Authentication. 
    The utilization of PostgreSQL allows the user to track and make live updates
    to their fitness goals through global state redux-sagas. 
      </div>
    </div>
  );
}

export default AboutPage;
