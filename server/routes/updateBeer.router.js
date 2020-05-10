const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//route to update an entry on the beer log home page and database
router.put('/',  (req, res) => {
    // Req.body is the survey data object received from client
    let newEntry = req.body;
    console.log(`updating beer log entry`, req.body);
    // Query text to establish the data being sent to the DB
    let queryText = `UPDATE "user_input" SET "brewery_name"=$1, "beer_style_name"=$2, "beer_name"=$3, "date"=$4, "rating"=$5, "comments"=$6 WHERE "id"=$7`;
    pool.query(queryText, [newEntry.brewery_name, newEntry.beer_style_name, newEntry.beer_name, newEntry.date, newEntry.rating, newEntry.comments, newEntry.id])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error updating beer entry`, error);
        res.sendStatus(500);
      });
  });

module.exports = router;