const asyncHandler = require("../middlewares/asyncHandler");
const adminRepository = require('../repository/admin')
const createUserByAdmin = asyncHandler(async(req, res) => {
  const {
    username,
    password,
    role,
    firstname,
    lastname,
    email,
    phone,
    place,
    district
  } = req.body;
  const  addUser = await adminRepository.createUserByAdmin(username,
    password,
    role,
    firstname,
    lastname,
    email,
    phone,
    place,
    district)
    return res.status(201).json({addUser})
});

const addProject = (req, res) => {};
const getProjects = (req, res) => {};

module.exports = {
  createUserByAdmin
};
