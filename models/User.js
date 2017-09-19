const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String,
    facebookId: String
});

//only create when it not exist
mongoose.model('users', userSchema );