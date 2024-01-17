const asyncHandler = require("../middlewares/asyncHandler");
const adminRepository = require("../repository/admin");
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
const getProjects = (req, res) => {};
const assignDesigner=asyncHandler(async(req,res)=>{

})

module.exports = {
  createUserByAdmin,
  addProject,
  assignDesigner
};