const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());

app.get('/', (req,res) => {
    res.send({ gg: 'Good Game!!!!' });
});

const PORT = process.env.PORT || 5000; 
app.listen(PORT);
//localhost:5000
//https://evening-meadow-85990.herokuapp.com/
//https://git.heroku.com/evening-meadow-85990.git