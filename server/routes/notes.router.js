const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const dateInput = req.params.date;
    const query = 
    `SELECT user_selected_date, notes, user_id 
    FROM user_notes 
    JOIN "user" ON "user".id = user_notes.user_id
    WHERE user_notes.user_selected_date = '${dateInput}';`
      pool.query(query)
      .then(result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get selected date data', err);
        res.sendStatus(500)
      })
  });


  router.post('/', (req, res) => {
    const QUERY = `INSERT INTO "user_notes" (user_selected_date, notes, user_id) 
    VALUES ($1, $2, $3);`;
    const addedNotes= req.body
    console.log('THIS IS THE REQ.BODY FOR THE POST', addedNotes);
    pool.query(QUERY,[addedNotes.user_selected_date, addedNotes.notes, addedNotes.user_id])
    .catch(err => {
    console.log('ERROR: Get selected date data', err);
    res.sendStatus(500)
  })})
  ;

  module.exports = router;