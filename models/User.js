const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    first: String,

    last: String,

    password: {
        type: String,
        required: true,
        bcrypt: true
    },

    joined_at: {
        type: Number,
        default: Date.now()
    }
});

userSchema.plugin(require('mongoose-bcrypt'));

const User = mongoose.model('User', userSchema);

module.exports = User;
