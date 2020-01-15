const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users', mongoose.userSchema);

//serializes user
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null,user);
    });
})
passport.use(
    new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true,
    }, (accessToken, refreshToken, profile, done) =>{
        /* console.log('access token',accessToken);
        console.log('refresh token',refreshToken);
        console.log('profile',profile); */
        //find user first
        User.findOne({ googleID: profile.id})//asynchronous function, return promise
        .then((existingUser) => {
            if (existingUser){
                //already have record with the id
                done(null, existingUser);
            }else{
                //don't have any record...
                
                //saves the user data
                //asynchronous function
                new User({ googleID: profile.id })
                .save()
                .then(user => done(null,user));
            }
        })
        

        

    })
);