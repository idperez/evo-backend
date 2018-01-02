const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { keys } = require('./config/keys');

const app = express();

app.use(express.static(__dirname + '/view'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(session({
    secret: 'sid the man',
    resave: true,
    saveUninitialized: true
}));

const routes = require('./routes');

app.use(routes);

mongoose.Promise = Promise;

mongoose.connect(keys.mongo.mongoURI, {
    useMongoClient: true
});

app.listen(3000, () => {
    console.log('App running on port 3000!');
});
