const express = require('express');
const router = express.Router();


// define the home page route
router.get('/', async function(req, res) {
    // res.render는 view의 ejs filename 칭한다
    res.render('blog', {
        title: '블로그',
        description: 'main page'
    })
});

router.get('/detail', async function(req, res) {
    // res.render는 view의 ejs filename 칭한다
    res.render('blogDetail', {
        title: '블로그 디테일',
        description: 'main page'
    })
});

module.exports = router;
