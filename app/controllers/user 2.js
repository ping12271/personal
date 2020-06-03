const express = require('express');
const router = express.Router();

const User = require('../models/user');


// define the home page route
router.get('/', async function(req, res) {
    try {
        const users = await User.findAll();
        res.json({users});
    } catch (e) {
        console.log(e);
    }
});


module.exports = router;