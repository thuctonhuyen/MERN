const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

const app = express();

//set cookie for 30days
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

//tell passport to use cookie-session
app.use(passport.initialize());
app.use(passport.session());

//routing:
require('./routes/authRoutes')(app);

//connect mongoose with mongodb
mongoose.connect(keys.mongoURI);

app.get('/', (req, res) => {
    res.send(
        {
            hi: 'there',
            'bye': 'buddy'
        }
    );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);