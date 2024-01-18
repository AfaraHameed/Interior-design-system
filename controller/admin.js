const asyncHandler = require("../middlewares/asyncHandler");
const adminRepository = require("../repository/admin");
const userRepository = require("../repository/user")
const clientService = require("../services/client");
const designService = require("../services/designer");
const ErrorResponse = require("../util/errorResponse");
const createUserByAdmin = asyncHandler(async (req, res, next) => {
  const {
    username,
    password,
    role,
    firstname,
    lastname,
    email,
    phone,
    place,
    district,
  } = req.body;
  console.log("in controller");
  const user = await adminRepository.createUserByAdmin(
    username,
    password,
    role,
    firstname,
    lastname,
    email,
    phone,
    place,
    district
  );
  if (role == "client") {
    await clientService.addClient(user.userid);
  }
  if (role == "designer") {
    await designService.addDesigner(user.userid);
  }
  return res.status(201).json({ success: true, message: user });
});

const addProject = asyncHandler(async (req, res, next) => {
  const {
    projectName,
    status,
    description,
    budget,
    startdate,
    endDateExpected,
    inspirationalImg,
    additionalDoc,
    clientId,
  } = req.body;
  const project = await adminRepository.addProject(
    projectName,
    status,
    description,
    budget,
    startdate,
    endDateExpected,
    inspirationalImg,
    additionalDoc,
    clientId
  );
  console.log(project);

  return res.status(201).json({ success: true, data: { message: project } });
});
const getProjects = asyncHandler(async(req, res,next) => {
  const projects = await adminRepository.getAllProjects()
  if(projects){
    res.status(200).json({success:true,data:{message:projects}})
  }
  else{
    next(new ErrorResponse("No projects found",404))
  }
});


const assignDesignerToProject = asyncHandler(async (req, res) => {
  const { project_id, designer_id } = req.body;
  const result = await adminRepository.assignDesignerToProject(
    project_id,
    designer_id
  );
  res.status(201).json({ success: true, data: { message: result } });
});
const getAllUsers=asyncHandler(async(req,res)=>{
  const users=await userRepository.getAllUsers();
  res.status(200).json({success:true,data:{message:users}})
})
module.exports = {
  createUserByAdmin,
  addProject,
  assignDesignerToProject,
  getProjects,
  getAllUsers
};
