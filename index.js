const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();

passport.use(
    new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    }, (accessToken, refreshToken, profile, done) =>{
        console.log('access token',accessToken);
        console.log('refresh token',refreshToken);
        console.log('profile',profile);
    })
);

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('/', (req,res) => {
    res.send({ gg: 'Good Game!!!!' });
});

app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000; 
app.listen(PORT);

//console.developers.google.com
//localhost:5000
//https://evening-meadow-85990.herokuapp.com/
//https://git.heroku.com/evening-meadow-85990.git

//client ID 
//client secret 
