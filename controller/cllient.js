const projectService = require("../services/project")
const userService = require("../services/user")
const FAQService = require("../services/FAQ")
const asyncHandler = require("../middlewares/asyncHandler");
const ErrorResponse = require("../util/errorResponse");
const { AsyncQueueError } = require("sequelize");
const getFAQ =asyncHandler (async(req,res)=>{
    const faqs = await FAQService.getFAQ()
    if(faqs)
    res.status(200).json({success:true,data:faqs})
  })

  const getProposal = asyncHandler(async(req,res,next)=>{
    const projectId  = req.params.projectid
    const proposal = await projectService.getProposal(projectId)
    if(proposal)
    res.status(200).json({success:true,data:{message:proposal}})
  })
  module.exports = {getFAQ,getProposal}