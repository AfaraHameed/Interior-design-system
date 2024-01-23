const asyncHandler = require("../middlewares/asyncHandler");
const designerRepository = require("../repository/designer");
const designerServices = require("../services/designer");
const projectService = require("../services/project");
const FAQService = require("../services/FAQ");
const BudgetService = require("../services/budget");
const ReviewService=require('../services/review')
const ErrorResponse = require("../util/errorResponse");
const PortfolioService = require("../services/portfolio");
const MaterialService = require("../services/material");
const getAllProjects = asyncHandler(async (req, res, next) => {
  const userId = req.userId;
  const designerid = await designerServices.getDesignerId(userId);
  const projects = await designerRepository.getAllProjects(designerid);
  if (projects)
    res.status(200).json({ success: true, data: { message: projects } });
  else next(new ErrorResponse(`No Projects found for this Designer`, 404));
});
const addTask = asyncHandler(async (req, res, next) => {
  const { projectId, taskName, description, status, dueDate } = req.body;
  const task = await designerRepository.addTask(
    projectId,
    taskName,
    description,
    status,
    dueDate
  );
  if (task) {
    res
      .status(201)
      .json({ success: true, data: `task ${taskName} created successfully ` });
  } else {
    next(new ErrorResponse("Failed to create task", 400));
  }
});
const getTasks = asyncHandler(async (req, res, next) => {
  const projectId = req.params.projectId;
  const tasks = await designerRepository.getTasks(projectId);
  if (tasks.length > 0) {
    res
      .status(200)
      .json({ success: true, count: tasks.length, data: { message: tasks } });
  } else {
    next(new ErrorResponse("No Tasks in this Project", 404));
  }
});
const updateTaskStatus = asyncHandler(async (req, res, next) => {
  const projectId = req.params.projectId;
  const taskId = req.params.taskId;
  const statusToUpdate = req.body.status;
  const updated = await designerRepository.updateTaskStatus(
    statusToUpdate,
    taskId,
    projectId
  );
  if (updated) {
    res.status(202).json({
      success: true,
      data: {
        message: `task ${taskId}  of Project ${projectId} updated successfully`,
      },
      updated_task: updated,
    });
  } else next(new ErrorResponse("Failed to update", 404));
});
const updateProjectStatus = asyncHandler(async (req, res, next) => {
  const projectId = req.params.id;
  const status = req.body.status;
  console.log(status);
  const updated = await designerRepository.updateProjectStatus(
    projectId,
    status
  );
  if (updated) {
    res.status(202).json({
      success: true,
      message: `Poject ${projectId} updated succesfully`,
      updated_data: updated,
    });
  } else return next(new ErrorResponse("Unable to Update", 500));
});
const getProjectDetails = asyncHandler(async (req, res, next) => {
  const id = req.params.projectId;
  const details = await projectService.getProjectDetails(id);
  if (details) {
    res.status(200).json({ success: true, data: details });
  } else next(new ErrorResponse("No Details Found", 404));
});

const getFAQ = asyncHandler(async (req, res, next) => {
  const faqs = await FAQService.getFAQ();
  if (faqs) res.status(200).json({ success: true, data: faqs });
  else next(new ErrorResponse("Server error", 500));
});

const addDesignProposal = asyncHandler(async (req, res, next) => {
  const projectId = req.params.projectId;
  const { proposalText, attachment, status } = req.body;
  const proposal = await designerRepository.addDesignProposal(
    proposalText,
    attachment,
    status
  );
  if (proposal) {
    console.log(proposal);
    const updated = await projectService.updateProject(projectId, proposal);
    res.status(201).json({
      successs: true,
      data: { message: "Design proposal created successfully" },
    });
  } else next(new ErrorResponse("Error creating design proposal", 500));
});
const addPortfolio = asyncHandler(async (req, res, next) => {
  const designerid = req.userId;
  console.log(designerid);
  const { name, beforeImage, afterImage, description, projectid } = req.body;
  const created = await PortfolioService.addPortfolio(
    name,
    beforeImage,
    afterImage,
    description,
    projectid,
    designerid
  );
  if (created)
    res.status(201).json({
      success: true,
      data: { message: "portfolio created successfully", portfolio: created },
    });
});
const getPortfolio = asyncHandler(async (req, res, next) => {
  const designerid = req.query.designerid;
  const portfolios = await PortfolioService.getPortfolio(designerid);
  if (portfolios)
    res.status(200).json({ success: true, data: { message: portfolios } });
});
const addBudgetToMaterial = asyncHandler(async (req, res) => {
  const projectid = req.params.projectid;
  const { allocatedAmount, materialid } = req.body;
  console.log(projectid,allocatedAmount,materialid)
  const addBudget = await BudgetService.addBudgetToMaterial(
    allocatedAmount,
    projectid,
    materialid
  );
  if(addBudget)
  res.status(201).json({success:true,message:"Budget allocated successfully",data:addBudget})
else
next(new ErrorResponse("Failed to add budget",400))
});
const getReviews = asyncHandler(async(req,res,next)=>{
  const projectid = req.params.projectid
  const reviews = await ReviewService.getReviews(projectid)
  if(reviews)
  res.status(200).json({success:true,data:reviews})
})
module.exports = {
  getAllProjects,
  addTask,
  getTasks,
  updateTaskStatus,
  updateProjectStatus,
  getProjectDetails,
  getFAQ,
  addDesignProposal,
  addPortfolio,
  getPortfolio,
  addBudgetToMaterial,
  getReviews
};
