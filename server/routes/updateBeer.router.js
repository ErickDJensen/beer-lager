const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.put('/',  (req, res) => {
    //Req.body is the survey data object received from client
    // let newEntry = req.body;
    console.log(`updating beer log entry`, req.body);
    //Query text to establish the data being sent to the DB
    // let queryText = `INSERT INTO "user_input" ("brewery_name", "beer_style_name", "beer_name", "date", "rating", "comments", "user_id")
    //                  VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    // pool.query(queryText, [req.body.brewery_name, req.body.beer_style_name, req.body.beer_name, req.body.date, req.body.rating, req.body.comments, req.body.user_id])
    //   .then(result => {
    //     res.sendStatus(201);
    //   })
    //   .catch(error => {
    //     console.log(`Error adding beer entry`, error);
    //     res.sendStatus(500);
    //   });
  });

module.exports = router;