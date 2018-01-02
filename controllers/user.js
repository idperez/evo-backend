let db = require('../models');

module.exports = {

    getAll: (req, res) => {
        db.User
            .find({})
            .then(dbUser => {
                res.json(dbUser);
            });
    },

    findOne: (req, res) => {
        db.User
            .findOne(req.params)
            .then(dbUser => {
                res.json(dbUser);
            }).catch(err => {
                res.json(err);
            });
    },

    searchByLike: (req, res) => {
        const { searchBy, value} = req.params;

        let query = {};

        query[searchBy] = { '$regex': value };

        db.User
            .find(query)
            .then(dbUser => {
                res.json(dbUser);
            }).catch(err => {
                res.json(err);
            });
    },

    create: (req, res) => {
        db.User
            .create(req.body)
            .then(dbUser => {
                res.json(dbUser);
            })
            .catch(err => {
                res.json(err);
            });
    },

    login: (req, res) => {
        const { email, password } = req.body;

        const query = { email };

        db.User
            .findOne(query)
            .then(dbUser => {
                dbUser.verifyPassword(password)
                    .then(valid => {
                        if(valid) {
                            res.send(true);
                        } else {
                            res.send(false);
                        }
                    });
            }).catch(err => {
                res.json(err);
            });
    },

    update: (req, res) => {
        const newValues = { $set: req.body };

        db.User
            .updateOne(req.params, newValues)
            .then(dbUser => {
                res.json(dbUser);
            }).catch(err => {
                res.json(err);
            });
    },

    delete: (req, res) => {
        db.User
            .remove({ _id: req.params.id })
            .then(dbUser => {
                res.json(dbUser);
            }).catch(err => {
                res.json(err);
            });
    }
};