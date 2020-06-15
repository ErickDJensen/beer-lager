const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//route to show breweries on breweries page
router.get('/', (req, res) => {
    console.log('Brewries info GET arrived at server');
    const queryText = `SELECT * FROM "brewery" ORDER BY "brewery"."name"
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