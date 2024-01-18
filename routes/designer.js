const express = require("express");
const router = express.Router();
const designerController = require('../controller/designer')
const {verifyTokenHandler} = require('../middlewares/jwtHandler')
router.get('/projects',[verifyTokenHandler],designerController.getAllProjects)
router.post('/task',[verifyTokenHandler],designerController.addTask)
module.exports=router