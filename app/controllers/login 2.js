const express = require('express');
const router = express.Router();

// define the home page route
router.get('/', async function(req, res) {
    res.render('login', {
        title: 'login',
        description: 'login page'
    })
});


module.exports = router;