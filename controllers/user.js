let db = require("../models");

module.exports = {

    getAll: (req, res) => {
      db.User
          .find({})
          .then(dbUser => {
              res.json(dbUser);
          });
    },

    findOne: (req, res) => {
        res.send("here");
        // db.User
        //     .findOne(req.query)
        //     .then(dbUser => {
        //         //res.json(dbNote);
        //         res.send("works");
        //     });
    },

    create: (req, res) => {
        res.send(req.body);
        // db.User
        //     .create(req.body)
        //     .then(dbUser => {
        //         res.json(dbUser);
        //     });
    },

    delete: (req, res) => {
        db.User
            .remove({ _id: req.params.id })
            .then(dbUser => {
                //res.json(dbNote);
                res.send("workd");
            });
    }
};
