let router = require("express").Router();
let userRoutes = require("./users");

router.use("/user", userRoutes);

module.exports = router;
