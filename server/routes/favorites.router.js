const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Favorites GET arrived at server', req.user.id);
    let param = req.user.id;
    pool.query(`SELECT * FROM "user_input" WHERE "user_id" = $1 AND "rating" = 5 ORDER BY "date"`,  [param])
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`ERROR ON QUERY ${error}`)
            res.sendStatus(500);
        })
});

module.exports = router;