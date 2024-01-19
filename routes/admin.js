const express = require("express");
const router = express.Router();
const adminController = require('../controller/admin');
const { verifyTokenHandler,verifyRole } = require("../middlewares/jwtHandler");
router.post('/user',[verifyTokenHandler,verifyRole('admin')],adminController.createUserByAdmin)
router.delete('/user/:id',[verifyTokenHandler,verifyRole('admin')],adminController.deletUserAccount)
router.route('/project',[verifyTokenHandler,verifyRole('admin')]).post(adminController.addProject).get(adminController.getProjects,)
//router.post('/project',adminController.addProject)
router.post('/project/assign_designer',[verifyTokenHandler,verifyRole('admin')],adminController.assignDesignerToProject)
router.get('/user',[verifyTokenHandler,verifyRole('admin')],adminController.getAllUsers)
router.get('/dashboard',[verifyTokenHandler,verifyRole('admin')],adminController.getAdminDashboardDetails)
router.post('/faq',[verifyTokenHandler,verifyRole('admin')],adminController.addFAQ)
module.exports=router
