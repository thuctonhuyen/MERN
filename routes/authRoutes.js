const passport = require('passport'); //require original npm passport

module.exports = (app) => {
//'google' => known for GoogleStrategy
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

//let passport handle according to google strategy (exchange code sending back from google)
//so that we can let user set up profile
    app.get('/auth/google/callback', passport.authenticate('google'));
    
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};