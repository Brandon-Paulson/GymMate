const express = require('express');
const pool = require('../db/pool.js');

const router = express.Router();

router.post('/', (req, res) => {
    const QUERY = `INSERT INTO "user_selection" (exercise_name, exercise_equipiment, repetitions) 
    VALUES ($1, $2, $3);`;
    const addedExercises = req.body
    console.log('THIS IS THE REQ.BODY FOR THE POST', addedExercises);
    pool.query(QUERY,[addedExercises.exercise_name, addedExercises.exercise_equipiment, addedExercises.repetitions])
  })