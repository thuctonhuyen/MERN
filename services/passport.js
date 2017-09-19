const passport = require('passport'); //give express ideas how to handle authentication
const GoogleStrategy = require('passport-google-oauth20').Strategy; //instruct passport on how to authenticate with google
const keys = require('../config/keys');


const mongoose = require('mongoose');
//single argument: try to fetch something out of mongoose:
const User = mongoose.model('users');

//serializes user into id - cookies token
passport.serializeUser((user, done) => {
    done(null, user.id); //first argument (error argument),
    // user.id => mongodb user's id, not googleid aka model instance 's id
    //user.id => is now cookie token

});

//deseriliaze id into user
passport.deserializeUser((id, done) => {
    const user = User.findById(id).then((user) => {
        done(null, user)
    });
});

//configuration for passport:

//passport adapt to Google strategy
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback', //route after user get grant permission
    proxy: true
}, (accessToken, refreshToken, profile, done) => {
    //google sees 'code' in url and replies with details about user
    //this is the opportunity to save user into our database

    //search for that user first:
    const user = User.findOne({googleId: profile.id}).then((existingUser) => {
        if (existingUser) {
            //first arg: null => indicate no error
            done(null, existingUser);

        } else {
            //only create user if the user not exist:
            //create new instance of user with new, save() => save to database
            new User({googleId: profile.id}).save()
                .then((newUser) => done(null, newUser));

        }
    });
}));