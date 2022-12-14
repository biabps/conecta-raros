const controller = require("../controllers/userController");

const express = require("express");


const router = express.Router();



router.get("/all", controller.getAllUsers);
router.get("/:illness", controller.getUserIllness);
router.get("/:id", controller.getUserById);
router.post("/new", controller.addNewUser);
router.patch("/:id", controller.updateUserById);
router.delete("/:id", controller.deleteUser);

module.exports = router;

