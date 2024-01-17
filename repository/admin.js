const { User } = require("../model/user");
const { Project } = require("../model/project");
const { Designer } = require("../model/designer");
const { DesignerProject } = require("../model/designer");
const { hashPassword } = require("../util/passwordHelper");
const createUserByAdmin = (
  username,
  plainpassword,
  role,
  firstname,
  lastname,
  email,
  phone,
  place,
  district
) => {
  return new Promise((resolve, reject) => {
    const password = hashPassword(plainpassword);
    User.create({
      username,
      password,
      role,
      firstname,
      lastname,
      email,
      phone,
      place,
      district,
    })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const addProject = (
  projectName,
  status,
  description,
  budget,
  startdate,
  endDateExpected,
  inspirationalImg,
  additionalDoc,
  clientId
) => {
  return new Promise((resolve, reject) => {
    Project.create({
      projectName,
      status,
      description,
      budget,
      startdate,
      endDateExpected,
      inspirationalImg,
      additionalDoc,
      clientId,
    })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        console.log(err);
        resolve(err);
      });
  });
};
const assignDesignerToProject = (project_id, designer_id) => {
  console.log(project_id, designer_id);
  return new Promise(async(resolve, reject) => {
    const project = await Project.findByPk(project_id);
    const designer =await  Designer.findByPk(designer_id);
    console.log(project);
    console.log(designer);
    if (!project || !designer) {
      reject("Either the project or the designer does not exist");
    } else {
      const created = project.addDesigner(designer, {
        through: { selfGranted: false },
      });
      const result = Project.findByPk(project_id,{include:Designer})
      resolve(result)
    }
  });
};
module.exports = { createUserByAdmin, addProject, assignDesignerToProject };
