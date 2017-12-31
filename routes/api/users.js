let router = require("express").Router();
let userController = require("../../controllers/user");

router.get("/", userController.getAll);
router.get("/:id", userController.findOne);

router.post("/", userController.create);

router.delete("/:id", userController.delete);

module.exports = router;
