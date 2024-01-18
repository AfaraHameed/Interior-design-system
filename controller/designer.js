const asyncHandler = require("../middlewares/asyncHandler");
const designerRepository = require("../repository/designer");
const designerServices = require("../services/designer")
const getAllProjects = asyncHandler(async (req, res) => {
  const userId = req.userId;
  const designerid = await designerServices.getDesignerId(userId);
  const projects = await designerRepository.getAllProjects(designerid);
  res.status(200).json({ success: true, data: { message: projects } });
});
module.exports = { getAllProjects };
