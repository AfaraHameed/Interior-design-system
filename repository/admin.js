const { User } = require("../model/user");
const {Project} = require("../model/project")
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
  console.log( projectName,
    status,
    description,
    budget,
    startdate,
    endDateExpected,
    inspirationalImg,
    additionalDoc,
    clientId);
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
      clientId
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
module.exports = { createUserByAdmin, addProject };
