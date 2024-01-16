const express = require("express");
const router = express.Router();
const adminController = require('../controller/admin')
router.post('/user',adminController.createUserByAdmin)

module.exports=router
