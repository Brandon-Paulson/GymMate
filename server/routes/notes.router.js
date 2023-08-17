const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/:date/:userId', (req, res) => {
    const dateInput = req.params.date;
    const userInput = req.params.userId
    const query = 
    `SELECT user_selected_date, notes, user_id 
    FROM user_notes 
    JOIN "user" ON user_notes.user_id = "user".id
    WHERE user_notes.user_id ='${userInput}' AND user_notes.user_selected_date = '${dateInput}';`
      pool.query(query)
      .then(result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get selected date data', err);
        res.sendStatus(500)
      })
  });

  router.put('/', (req, res) => {
    const noteEdits = req.body;
    console.log('WHAT ARE THE PUT ROUTE PARAMS', noteEdits.notes)
    const query = 
    `UPDATE "user_notes" 
     SET notes = '${noteEdits.notes}'
     WHERE user_id ='${noteEdits.user_id}' AND user_selected_date = '${noteEdits.user_selected_date}'; `
    pool.query(query)
    .catch(err => {
      console.log('ERROR: Get selected date data', err);
      res.sendStatus(500)
    })
  });
//    JOIN "user" ON user_notes.user_id = "user".id


  router.post('/', (req, res) => {
    const QUERY = `INSERT INTO "user_notes" (user_selected_date, notes, user_id) 
    VALUES ($1, $2, $3);`;
    const addedNotes= req.body
    console.log('THIS IS THE REQ.BODY FOR THE POST', addedNotes);
    pool.query(QUERY,[addedNotes.user_selected_date, addedNotes.notes, addedNotes.user_id])
    .catch(err => {
    console.log('ERROR: Get selected date data', err);
    res.sendStatus(500)
  })
});

router.delete('/', (req, res) => {
  const deleteInfo = req.body;
  const query = `DELETE FROM "user_notes"
       WHERE user_id ='${deleteInfo.user_id}' 
       AND user_selected_date = '${deleteInfo.user_selected_date}'; `
pool.query(query)
    .catch(err => {
      console.log('ERROR: Get selected date data', err);
      res.sendStatus(500)
    })
});


  module.exports = router;

