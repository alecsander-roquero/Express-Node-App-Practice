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

//console.developers.google.com
//localhost:5000
//https://evening-meadow-85990.herokuapp.com/
//https://git.heroku.com/evening-meadow-85990.git

//client ID 17042631237-s24sdgnumv6d662ect3g4ir3itffvcml.apps.googleusercontent.com
//client secret 7gtlimwgC-tFeBNT5rB_0BEV
