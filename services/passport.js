const passport = require('passport'); //give express ideas how to handle authentication
const GoogleStrategy = require('passport-google-oauth20').Strategy; //instruct passport on how to authenticate with google
const keys = require('../config/keys');

//configuration for passport:
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback', //route after user get grant permission
}, (accessToken, refreshToken, profile, done) => {
    //google sees 'code' in url and replies with details about user
    //this is the opportunity to save user into our database
    console.log('access token:',accessToken);
    console.log('refresh token:',refreshToken);
    console.log('profile:', profile);
})); //passport adapt to Google strategy