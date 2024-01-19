const projectService = require("../services/project")
const userService = require("../services/user")
const FAQService = require("../services/FAQ")
const asyncHandler = require("../middlewares/asyncHandler");
const ErrorResponse = require("../util/errorResponse");
const getFAQ =asyncHandler (async(req,res)=>{
    const faqs = await FAQService.getFAQ()
    if(faqs)
    res.status(200).json({success:true,data:faqs})
  })
  module.exports = {getFAQ}