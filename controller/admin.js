const asyncHandler = require("../middlewares/asyncHandler");
const adminRepository = require("../repository/admin");
const userRepository = require("../repository/user") 
const clientService = require("../services/client");
const designService = require("../services/designer");
const projectService = require("../services/project")
const userService = require("../services/user")
const FAQService = require("../services/FAQ")
const MaterialService = require("../services/material")
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
  console.log('user',user);
  if(user)
  return res.status(201).json({ success: true, message: user });
else
next(new ErrorResponse("failed creation"))
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

// const getProjects = asyncHandler(async(req, res,next) => {
//   const projects = await adminRepository.getAllProjects()
//   if(projects){
//     res.status(200).json({success:true,data:{message:projects}})
//   }
//   else{
//     next(new ErrorResponse("No projects found",404))
//   }
// });

const getProjects = asyncHandler(async(req, res,next) => {
  let{doSort,doFilter,sortType,sortOrder,status} = req.query
  doSort = doSort === "true" ? true : false;
  doFilter = doFilter === "true" ? true : false;
  // const filterStatus = req.query.status
  const projects = await adminRepository.getAllProjects(doSort,doFilter,sortType,sortOrder,status)
  if(projects){
    res.status(200).json({success:true,data:{message:projects}})
  }
  else{
    console.log(projects);
    next(new ErrorResponse("No projects found",404))
  }
});


const assignDesignerToProject = asyncHandler(async (req, res) => {
  const { projectId, designerId } = req.body;
  const result = await adminRepository.assignDesignerToProject(
    projectId, designerId
  );
  res.status(201).json({ success: true, data: { message: result } });
});
const getAllUsers=asyncHandler(async(req,res)=>{
  const users=await userRepository.getAllUsers();
  res.status(200).json({success:true,data:{message:users}})
})

const getAdminDashboardDetails = asyncHandler(async(req,res)=>{
  const DesignersCount=await designService.countDesigners()
  const ClientsCount = await clientService.countClients()
  const ProjectsCount = await projectService.countProjects()
  const DashBoardData={
    Designers : DesignersCount,
    Clients : ClientsCount,
    Projects : ProjectsCount
  }
  res.status(200).json({success:true,data:DashBoardData})
})
const deletUserAccount = asyncHandler(async(req,res,next)=>{
  const userId = req.params.id
  const isExist = await userService.checkRecordExists(userId)
  console.log(isExist);
  if(!isExist){
    return next(new ErrorResponse('The User does not exist',404))
  }
  const deleted = await userService.deletUserAccount(userId)
    res.status(202).json({success:true,data:{message:`user ${userId} deleted successfully`}})
})

const addFAQ = asyncHandler(async(req,res)=>{
  const  {question,answer}= req.body
  const faq = await FAQService.addFAQ(question, answer)
  res.status(201).json({success:true,data:faq})
})
const addMaterial = asyncHandler(async(req,res)=>{
  const {
    name,description
  }=req.body
  const material = await MaterialService.addMaterial(name,description)
  if(material){
    res.status(201).json({success:true,data:{message:"material created succesfully"}})
  }
  else
  next(new ErrorResponse("Error creating the material",500))
})

module.exports = {
  createUserByAdmin,
  addProject,
  assignDesignerToProject,
  getProjects,
  getAllUsers,
  getAdminDashboardDetails,
  deletUserAccount,
  addFAQ,
  addMaterial
};
