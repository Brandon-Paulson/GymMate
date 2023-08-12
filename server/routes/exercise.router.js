const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('api/:muscle', rejectUnauthenticated, (req, res) => {
    let muscle=req.params.muscle
    res.sendStatus(200);
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  console.log('IS THE POST EVEN STARTING????')
  const QUERY = `INSERT INTO "users_selection" (exercise_name, exercise_equipment, repetitions) 
  VALUES ($1, $2, $3);`;
  const addedExercises = req.body
  console.log('THIS IS THE REQ.BODY FOR THE POST', addedExercises);
  pool.query(QUERY,[addedExercises.exercise_name, addedExercises.exercise_equipment, addedExercises.repetitions])
});

module.exports = router;
