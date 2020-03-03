const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');


passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToke, profile, done) => {
    console.log("accessToken:", accessToken);
    console.log('refreshToken', refreshToke);
    console.log("profile", profile);
})
);