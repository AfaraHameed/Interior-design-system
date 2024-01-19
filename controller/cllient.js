const projectService = require("../services/project");
const userService = require("../services/user");
const FAQService = require("../services/FAQ");
const asyncHandler = require("../middlewares/asyncHandler");
const ErrorResponse = require("../util/errorResponse");
const { AsyncQueueError } = require("sequelize");
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
  console.log(newStatus,proposalId);
  const statusUpdate = await projectService.changeProposalStatus(
    proposalId,
    newStatus
  );
  if (statusUpdate)
    res
      .status(200)
      .json({
        success: true,
        data: { message: `Proposal status changed to ${newStatus}` },
      });
  else next(new ErrorResponse("Failed to update", 400));
});
module.exports = { getFAQ, getProposal, changeProposalStatus };
