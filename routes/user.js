const express = require("express");
const router = express.Router();
const userController = require('../controller/user');
const { verifyToken } = require("../util/jwtHelper");
router.post('/login',userController.login)
module.exports=router