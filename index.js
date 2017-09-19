const express = require('express');
const passport = require('passport'); //give express ideas how to handle authentication
const GoogleStrategy = require('passport-google-oauth20').Strategy; //instruct passport on how to authenticate with google
const keys = require('./config/keys');

const app = express();

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback', //route after user get grant permission
}, (accessToken) => {
    console.log(accessToken)
})); //passport adapt to Google strategy

//object req: object representing the incoming request
//object res: object representing the outgoing response
app.get('/', (req, res) => {
    res.send(
        {
            hi: 'there',
            'bye': 'buddy'
        }
    );
});


//dynamic PORT:
//env => environment variables
//look at underlying env and see whether they defined port for us to use; otherwise just use 5000 (for localhost)
const PORT = process.env.PORT || 5000;
//express tells node to listen to 5000
//node sends traffic rec. from 5000 to express
app.listen(PORT);