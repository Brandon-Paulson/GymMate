const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/:date', (req, res) => {
    const dateInput = req.params.date;
    console.log('THIS IS INPUT', dateInput)
    const query = 
    `SELECT exercise_name, exercise_equipment, repetitions, user_selected_date
    FROM users_selection 
    JOIN "user" ON "user".id = users_selection.user_id
    WHERE users_selection.user_selected_date = '${dateInput}';`
      pool.query(query)
      .then(result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get selected date data', err);
        res.sendStatus(500)
      })
  });

// router.post('/:muscle', (req, res) => {
//     const QUERY = `INSERT INTO "user_selection" (exercise_name, exercise_equipiment, repetitions) 
//     VALUES ($1, $2, $3);`;
//     const addedExercises = req.body
//     console.log('THIS IS THE REQ.BODY FOR THE POST', addedExercises);
//     pool.query(QUERY,[addedExercises.exercise_name, addedExercises.exercise_equipiment, addedExercises.repetitions])
//   })

module.exports = router;
