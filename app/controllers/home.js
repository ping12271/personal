const express = require('express');
const router = express.Router();


// define the home page route
router.get('/', async function(req, res) {
    res.render('home', {
        title: 'home',
        description: 'main page'
    })
});

module.exports = router;
