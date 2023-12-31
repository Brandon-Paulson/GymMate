const express = require('express');
require('dotenv').config();

const app = express();
const path = require('path');
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const exerciseRouter = require('./routes/exercise.router');
const selectedExerciseRouter = require('./routes/selected.exercises.router');
const notesRouter = require('./routes/notes.router')
// Express middleware
app.use(express.json());

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/users_selection', selectedExerciseRouter);
app.use('/api/user_notes', notesRouter);
app.use('/api/:muscle', exerciseRouter);


// Serve static files
app.use(express.static('build'));
app.use('*', (req, res) => res.sendFile(path.resolve('build', 'index.html')))

// App Set //
const PORT = process.env.PORT || 8002;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
