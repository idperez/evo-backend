let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");

let app = express();

let routes = require("./routes");

app.use(routes);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let MONGODB_URI = "mongodb://localhost/evo";

mongoose.Promise = Promise;

mongoose.connect(MONGODB_URI, {
    useMongoClient: true
});

app.listen(3000, () => {
    console.log("App running on port 3000!");
});
