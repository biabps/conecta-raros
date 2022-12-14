const controller = require("../controllers/userController");

const express = require("express");


const router = express.Router();



router.get("/all", controller.getAllUsers);
router.get("/:id", controller.getUserById);
router.get("/:illness", controller.getUserIllness);
router.post("/new", controller.addNewUser);
router.patch("/:id", controller.updateUserById);
router.delete("/:id", controller.deleteUser);

module.exports = router;

