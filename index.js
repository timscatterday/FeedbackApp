const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')
const app = express();

//Creates a new instance of the Google passport strategy
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret
  })
);

//Ask heroku which port to listen to or set it to localhost:5000
const PORT = process.env.PORT || 5000;

app.listen(PORT);

