const asyncHandler = require("../middlewares/asyncHandler");
const designerRepository = require("../repository/designer");
const designerServices = require("../services/designer")
const ErrorResponse = require("../util/errorResponse");
const getAllProjects = asyncHandler(async (req, res) => {
  const userId = req.userId;
  const designerid = await designerServices.getDesignerId(userId);
  const projects = await designerRepository.getAllProjects(designerid);
  res.status(200).json({ success: true, data: { message: projects } });
});
const addTask = asyncHandler((async(req,res)=>{
    const {
        projectId,taskName,description,status,dueDate
    }=req.body
    console.log(projectId);
    const task=await designerRepository.addTask(projectId,taskName,description,status,dueDate);
    if(task){
        res.status(201).json({success:true,data:`task ${taskName} created successfully `})
    }
    else{
        next(new ErrorResponse("Failed to create task" , 400))
    }
}))
module.exports = { getAllProjects,addTask };
