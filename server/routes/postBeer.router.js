const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/',  (req, res) => {
    //Req.body is the survey data object received from client
    let newEntry = req.body;
    console.log(`Adding feedback`, newEntry);
    //Query text to establish the data being sent to the DB
    let queryText = `INSERT INTO "user_input" ()
                     VALUES ();`;
    pool.query(queryText, [])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding feedback`, error);
        res.sendStatus(500);
      });
  });

module.exports = router;