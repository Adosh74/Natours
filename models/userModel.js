const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user must have a name'],
        trim: true,
        maxlength: [255, 'The name must be at least 255 characters'],
    },
    email: {
        type: String,
        required: [true, 'A user must have a email'],
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.default.isEmail, 'You should enter a valid email'],
    },

    photo: String,

    password: {
        type: String,
        minlength: 8,
        required: [true, 'Please provide your a password'],
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
