const express = require("express");
const router = express.Router();
const adminController = require('../controller/admin');
const { verifyTokenHandler } = require("../middlewares/jwtHandler");
router.post('/user',[verifyTokenHandler],adminController.createUserByAdmin)
router.delete('/user/:id',[verifyTokenHandler],adminController.deletUserAccount)
router.route('/project',).post(adminController.addProject).get(adminController.getProjects,)
//router.post('/project',adminController.addProject)
router.post('/project/assign_designer',[verifyTokenHandler],adminController.assignDesignerToProject)
router.get('/user',[verifyTokenHandler],adminController.getAllUsers)
router.get('/dashboard',[verifyTokenHandler],adminController.getAdminDashboardDetails)
module.exports=router
