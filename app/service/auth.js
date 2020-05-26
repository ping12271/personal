const express = require('express');
const router = express.Router();

// const user = require('../models/user');


// define the home page route
router.get('/', function(req, res) {
    console.log('auth');
    res.send("auth api");
});

router.post('/login', function(req, res) {
    console.log(req.body);
    const {email, password} = req.body;

    req.session.email = email;

    console.log(email, password);

    res.redirect('/home');
    // res.json({message: 'success login', ok: true})
});


router.get('/touch-session', function(req, res) {
    console.log(req.session);
    if(req.session.user_id) {
        res.json({
            user_id: req.session.user_id
        })
    } else {
        res.send("auth api");
    }
});




module.exports = router;