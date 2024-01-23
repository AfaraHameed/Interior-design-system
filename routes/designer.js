const express = require("express");
const router = express.Router();
const designerController = require('../controller/designer')
const {verifyTokenHandler} = require('../middlewares/jwtHandler')
router.get('/projects',[verifyTokenHandler],designerController.getAllProjects)
router.patch('/projects/:id/status',[verifyTokenHandler],designerController.updateProjectStatus)
router.post('/projects/task',[verifyTokenHandler],designerController.addTask)
router.get('/projects/:projectId/tasks',[verifyTokenHandler],designerController.getTasks)
router.patch('/projects/:projectId/tasks/:taskId/status',[verifyTokenHandler],designerController.updateTaskStatus)
router.get('/projects/:projectId',[verifyTokenHandler],designerController.getProjectDetails)
router.get('/faq',[verifyTokenHandler],designerController.getFAQ)
router.post('/designpropsal/:projectId',[verifyTokenHandler],designerController.addDesignProposal)
router.post('/portfolio',[verifyTokenHandler],designerController.addPortfolio)
router.post('/projects/:projectid/material/budget',[verifyTokenHandler],designerController.addBudgetToMaterial)
// router.post('/projects/:projectid/balance_budget',[verifyTokenHandler],designerController.getBalanceBudget)
router.get('/projects/:projectid/review',[verifyTokenHandler],designerController.getReviews)

module.exports=router