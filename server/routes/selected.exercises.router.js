const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/:date/:userId', (req, res) => {
    const dateInput = req.params.date;
    const userInput = req.params.userId
    const query = 
    `SELECT exercise_name, exercise_equipment, repetitions, user_selected_date, user_id FROM users_selection 
     JOIN "user" ON  users_selection.user_id = "user".id
     WHERE users_selection.user_id ='${userInput}' AND users_selection.user_selected_date = '${dateInput}';`
    // WHERE users_selection.user_selected_date = '${dateInput}';
    // WHERE "user".id = users_select.user_id;`
      pool.query(query)
      .then(result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get selected date data', err);
        res.sendStatus(500)
      })
  });

module.exports = router;
