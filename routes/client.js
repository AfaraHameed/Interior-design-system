const express = require("express");
const router = express.Router();
const clientController = require("../controller/cllient");
const { verifyTokenHandler } = require("../middlewares/jwtHandler");
router.get("/faq", [verifyTokenHandler], clientController.getFAQ);
router.get(
  "/proposal/:projectid",
  [verifyTokenHandler],
  clientController.getProposal
);
router.patch(
  "/proposal/:id/status",
  [verifyTokenHandler],
  clientController.changeProposalStatus
); //status value will give as query parameter if client accept query parameter value will be 'accept'
router.get(
  "/portfolio",
  [verifyTokenHandler],
  clientController.getPortfolio
);
router.get('/projects/:projectId',[verifyTokenHandler],clientController.getProjectDetails)
router.get('/projects/:projectid/budgets',[verifyTokenHandler],clientController.getBudget)
module.exports = router;
