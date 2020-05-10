const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//route to get details for one beer log entry
router.get('/', (req, res) => {
    console.log('Details info GET arrived at server', req.query);
    const id = req.query.q;
    const queryText = `SELECT * FROM "user_input" WHERE "id" = $1;
    `;
    pool.query(queryText, [id])
        .then((result) => {
            res.send(result.rows[0]);
        })
        .catch((error) => {
            console.log(`ERROR ON QUERY ${error}`)
            res.sendStatus(500);
        })
});

module.exports = router;