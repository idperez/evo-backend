const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
const path = require('path');

const { keys } = require('../config/keys');
const db = require('../models');

const fbCallback = (accessToken, refreshToken, profile, cb) => {
    console.log(accessToken, refreshToken, profile);
    return cb(null, profile);
};

passport.use(new Strategy(keys.facebook, fbCallback));

module.exports = {

    authenticate: passport.authenticate('facebook'),

    callback: (req, res) => {
        res.send('checks status of request');
    },

    privacy: (req, res) => {
        res.sendFile(path.join(__dirname + '/privacy.html'));
    }
};
