const express = require("express");
const router = express.Router();
const adminController = require('../controller/admin');
const { verifyTokenHandler } = require("../middlewares/jwtHandler");
router.post('/user',[verifyTokenHandler],adminController.createUserByAdmin)
router.route('/project',).post(adminController.addProject).get(adminController.getProjects,)
//router.post('/project',adminController.addProject)
router.post('/project/assign_designer',adminController.assignDesignerToProject)
router.get('/user',adminController.getAllUsers)
module.exports=router
