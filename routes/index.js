let router = require("express").Router();
let apiRoutes = require("./api");

router.use("/api", apiRoutes);

module.exports = router;
