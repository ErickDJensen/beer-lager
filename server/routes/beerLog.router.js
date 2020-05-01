const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Beer log GET arrived at server', req.user.id);
    // let param = req.user.user_id;
    // const queryText = `
    // SELECT "user_input"."id" AS "id", "brewery"."name" AS "brewery", "beer_name", "beer_styles"."name", "date", "rating", "comments" 
    // FROM "user_input"
    // JOIN "beer_styles" ON "user_input"."beer_style_id" = "beer_styles"."id"
    // JOIN "brewery" ON "user_input"."brewery_id" = "brewery"."id"
    // `;
    pool.query(`SELECT * FROM "user_input"`)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`ERROR ON QUERY ${error}`)
            res.sendStatus(500);
        })
});

module.exports = router;