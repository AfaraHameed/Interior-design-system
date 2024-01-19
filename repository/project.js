const { Project } = require("../model/project");
const { Task } = require("../model/task");

const getProjectDetails = (projectid) => {
  return new Promise((resolve, reject) => {
    Project.findByPk(projectid)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const countProjects = () => {
  return Project.count();
};
const updateProject = (projectid, proposalId) => {
  return new Promise((resolve, reject) => {
    const updated = Project.update(
      { designproposalProposalId: proposalId },
      {
        where: {
          id: projectid,
        },
      }
    )
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
//const addProject = (req,res)
module.exports = { getProjectDetails, countProjects, updateProject };
