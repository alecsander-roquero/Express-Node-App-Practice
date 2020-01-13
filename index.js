const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

//must be in proper order
require('./models/User');
require('./services/passport');
//these..

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey],
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000; 
app.listen(PORT);

//console.developers.google.com
//localhost:5000
//https://evening-meadow-85990.herokuapp.com/
//https://git.heroku.com/evening-meadow-85990.git

//client ID 
//client secret 
