const { Designer, DesignerProject } = require("../model/designer");
const { Project } = require("../model/project");
const addDesigner = (userid) => {
  return new Promise(async (resolve, reject) => {
    Designer.create({
      userId: userid,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const getAllProjects = (designerId) => {
  return new Promise(async (resolve, reject) => {
    const designer = await Designer.findByPk(designerId);
    const AllProjects = await designer
      .getProjects()
      .then((data) => {
        console.log(data);
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const getDesignerId = (userId) => {
  return new Promise((resolve, reject) => {
    Designer.findOne({ where: { userId } })
      .then((data) => {
        console.log(data.designerId);
        resolve(data.designerId);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
module.exports = {
  addDesigner,
  getAllProjects,
  getDesignerId,
};
