const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');

const user = require('./app/controllers/user');
const auth = require('./app/service/auth');

const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const jsCookie = require('js-cookie');

const route = require('./config/route');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(cookieParser());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        path: '/',
        httpOnly: true,
        secure: false,
        maxAge: null
    }
}));
app.get('/', (req, res) => {
    res.redirect('/home');
});


app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/app/views'));
app.set('trust proxy', true);

route(app);

app.listen(8080, () => {
    console.log(`server is running on port 8080`)
});
