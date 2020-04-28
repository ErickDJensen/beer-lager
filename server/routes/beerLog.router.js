const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('GET arrived at server');
    const queryText = `SELECT "brewery"."name", "beer_name", "beer_styles"."name", "date", "rating", "comments" 
    FROM "user_input"
    JOIN "beer_styles" ON "user_input"."beer_style_id" = "beer_styles"."id"
    JOIN "brewery" ON "user_input"."brewery_id" = "brewery"."id"
    `;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`ERROR ON QUERY ${error}`)
            res.sendStatus(500);
        })
});

module.exports = router;