const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res)=> {
    console.log('Getting feedback info');
    pool.query('SELECT * from "feedback;')
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error)=> {
        console.log(error);
        res.sendStatus(500);
    })
})

module.exports = router;