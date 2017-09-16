const passport = require('passport'); //require original npm passport

module.exports = (app) => {
//'google' => known for GoogleStrategy
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

//let passport handle according to google strategy (exchange code sending back from google)
//so that we can let user set up profile
    app.get('/auth/google/callback', passport.authenticate('google'));
}