const projectService = require("../services/project");
const userService = require("../services/user");
const FAQService = require("../services/FAQ");
const asyncHandler = require("../middlewares/asyncHandler");
const ErrorResponse = require("../util/errorResponse");
const portfolioService = require("../services/portfolio");
const BudgetService = require("../services/budget");
const ProjectService = require("../services/project");
const ClientService = require("../services/client");
const { AsyncQueueError } = require("sequelize");
const ReviewService = require("../services/review");
const getFAQ = asyncHandler(async (req, res) => {
  const faqs = await FAQService.getFAQ();
  if (faqs) res.status(200).json({ success: true, data: faqs });
});

const getProposal = asyncHandler(async (req, res, next) => {
  const projectId = req.params.projectid;
  const proposal = await projectService.getProposal(projectId);
  if (proposal)
    res.status(200).json({ success: true, data: { message: proposal } });
});

const changeProposalStatus = asyncHandler(async (req, res, next) => {
  const newStatus = req.query.status;
  const proposalId = req.params.id;
  console.log(newStatus, proposalId);
  const statusUpdate = await projectService.changeProposalStatus(
    proposalId,
    newStatus
  );
  if (statusUpdate)
    res.status(202).json({
      success: true,
      data: { message: `Proposal status changed to ${newStatus}` },
    });
  else next(new ErrorResponse("Failed to update", 400));
});
const getPortfolio = asyncHandler(async (req, res, next) => {
  const designerId = req.query.designerid;
  console.log(designerId);
  const portfolios = await portfolioService.getPortfolio(designerId);
  if (portfolios)
    return res
      .status(200)
      .json({ success: true, data: { portfolios: portfolios } });
});
const getProjectDetails = asyncHandler(async (req, res, next) => {
  const id = req.params.projectId;
  const details = await projectService.getProjectDetails(id);
  if (details) {
    res.status(200).json({ success: true, data: details });
  } else next(new ErrorResponse("No Details Found", 404));
});
const getBudget = asyncHandler(async (req, res, next) => {
  const projectid = req.params.projectid;
  const budget = await BudgetService.getBudget(projectid);
  const totalbudget = await ProjectService.getTotalBudget(projectid);
  balance_budget = totalbudget.budget - budget[1];
  res.status(200).json({
    success: true,
    data: { message: budget[0] },
    balanceBudget: balance_budget,
  });
});
const addReviews = asyncHandler(async (req, res, next) => {
  const projectId = req.params.projectid;
  const { description, ratings } = req.body;
  const userId = req.userId
  console.log(userId);
  const created = await ReviewService.addReviews(
    projectId,
    userId,
    description,
    ratings
  );
  if (created)
    res
      .status(201)
      .json({
        success: true,
        message: "Review added successfully",
        data: created,
      });
});


module.exports = {
  getFAQ,
  getProposal,
  changeProposalStatus,
  getPortfolio,
  getProjectDetails,
  getBudget,
  addReviews,
  
};
