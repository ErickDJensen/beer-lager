const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//route to delete an entry from the beer log home screen
router.delete('/', (req, res) => {
    console.log('id of entry to delete and user to delete arrived at server', req.body);
    let sqlText = `DELETE FROM "user_input" WHERE "id" = $1 AND "user_id" = $2;`;
    pool.query(sqlText, [req.body.beer_id, req.body.user_id]).then((response) => {
        console.log('deleted', response);
        res.sendStatus(200);
    }).catch( error => {
        console.log('error', error);
        res.sendStatus(500);
    });
});

module.exports = router;