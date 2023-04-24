const express = require("express");
let router = express.Router();
let userController = require("../controllers/user.controller");

router.get("/",userController.get);
router.get("/user-list",userController.userList);
router.get("/add",userController.add);
router.post("/add",userController.addin);

module.exports = router;