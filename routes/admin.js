const express = require("express");
const router = express.Router();
const adminController = require('../controller/admin')
router.post('/user',adminController.createUserByAdmin)
router.post('/project',adminController.addProject)
router.post('/project/assign_designer',adminController.assignDesignerToProject)

module.exports=router
