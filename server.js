const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require('./routes');

app.use(routes);

const MONGODB_URI = 'mongodb://admin:admin@ds135747.mlab.com:35747/evo';

mongoose.Promise = Promise;

mongoose.connect(MONGODB_URI, { useMongoClient: true });

app.listen(3000, () => { console.log('App running on port 3000!'); });
