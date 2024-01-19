const { DesignProposal } = require("../model/designProposal");
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
const getProposal = (projectId) => {
  return new Promise((resolve, reject) => {
    Project.findOne({
      where: { id: projectId },
      include: [{ model: DesignProposal }],
    })
      .then((data) => {
        console.log(data);
        resolve(data.designproposal);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const changeProposalStatus = (proposalId, newStatus) => {
  return new Promise((resolve, reject) => {
    DesignProposal.update({ status: newStatus }, { where: { proposalId: proposalId } })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
module.exports = {
  getProjectDetails,
  countProjects,
  updateProject,
  getProposal,
  changeProposalStatus,
};
