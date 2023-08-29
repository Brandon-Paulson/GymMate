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
    const query = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`
    pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get selected date data', err);
      res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  console.log('IS THE POST EVEN STARTING????')
  const QUERY = `INSERT INTO "users_selection" (exercise_name, exercise_equipment, repetitions, user_selected_date, user_id) 
  VALUES ($1, $2, $3, $4, $5);`;
  const addedExercises = req.body
  console.log('THIS IS THE REQ.BODY FOR THE POST', addedExercises);
  pool.query(QUERY,[addedExercises.exercise_name, addedExercises.exercise_equipment, addedExercises.repetitions, addedExercises.user_selected_date, addedExercises.user_id])
});

module.exports = router;
