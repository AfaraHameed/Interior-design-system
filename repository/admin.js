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
    const created = await DesignerProject.create({ designerId, projectId })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getAllProjects = (doSort, doFilter, sortType, sortOrder, status) => {
  if (doSort == true && doFilter == false) {
    if (sortType && sortOrder) {
      if (sortType == "budget" && sortOrder == "low_budget") {
        const result = sortProject(["budget", "ASC"]);
        if (result) return result;
      } else if (sortType == "budget" && sortOrder == "high_budget") {
        const result = sortProject(["budget", -1]);
        if (result) return result;
      } else if (sortType == "date" && sortOrder == "newest") {
        const result = sortProject(["createdAt", -1]);
        if (result) return result;
      } else if (sortType == "date" && sortOrder == "oldest") {
        const result = sortProject(["createdAt", -1]);
        if (result) return result;
      }
    } else {
      if (sortType) return "sortOrder_is_missing";
      else if (sortOrder) return "sortType_is_missing";
      else return "sortType_and_sortOrder_is_missing";
    }
  }
  if (doSort == false && doFilter == true) {
    const result = sortProjetByStatus({ status: status });
    return result;
  }
};

const sortProject = async (sortArray) => {
  console.log(sortArray);
  const result = await Project.findAll({
    include: [
      {
        model: DesignProposal,
        attributes: ["proposalText", "attachment", "status"],
      },
    ],
    order: [sortArray],
  });

  console.log(result);
  return result;
};
const sortProjetByStatus = async (sortArray) => {
  console.log("sortArray", sortArray);
  const result = await Project.findAll(
    {
      where: sortArray,
    },
    {
      include: [
        {
          model: DesignProposal,
          attributes: ["proposalText", "attachment", "status"],
        },
      ],
    }
  );
  console.log(result);
  return result;
};
module.exports = {
  createUserByAdmin,
  addProject,
  assignDesignerToProject,
  getAllProjects,
};
