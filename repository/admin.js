const { User } = require("../model/user");
const { Project } = require("../model/project");
const { Designer } = require("../model/designer");
const { DesignerProject } = require("../model/designer");
const { hashPassword } = require("../util/passwordHelper");
const { Model } = require("sequelize");
const { DesignProposal } = require("../model/designProposal");
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
const assignDesignerToProject = (projectId, designerId) => {
  console.log(projectId, designerId);
  return new Promise(async (resolve, reject) => {
    // const project = await Project.findByPk(project_id);
    // const designer = await Designer.findByPk(designer_id);
    // console.log(project);
    // console.log(designer);
    // if (!project || !designer) {
    //   reject("Either the project or the designer does not exist");
    // } 
    // else {
    //   const created = project.addDesigner(designer, {
    //     through: { selfGranted: false },
    //   });
    // else{
      const created = await DesignerProject.create({designerId,projectId}).then((data)=>{
        resolve(data)
      }).catch((err)=>{
        reject(err)
      })
    //}
      // const result = Project.findByPk(project_id, { include: Designer });
      // resolve(result);
    }
  );
};
const getAllProjects = (projectId) => {
  return new Promise((resolve,reject)=>{
    Project.findAll({ include:[{model:DesignProposal,
    attributes:['proposalText','attachment','status']
    }]})
    .then((projects) => {
      resolve(projects);
    })
    .catch((err) => {
      reject(err);
    });
  })
   
};
module.exports = {
  createUserByAdmin,
  addProject,
  assignDesignerToProject,
  getAllProjects,
};
