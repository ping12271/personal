const express = require('express');
const router = express.Router();

// define the home page route
router.get('/', async function(req, res) {
    res.json({result: 'health'})
});


module.exports = router;