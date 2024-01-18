const { Project } = require("../model/project");
const { Task } = require("../model/task");

const getProjectDetails = (projectid) => {
    console.log('projectid',projectid);
  return new Promise((resolve, reject) => {
    Project.findByPk(projectid).then((data) => {
      resolve(data);
    }).catch((err=>{
        reject(err)
    }));
  });
};
const countProjects = ()=>{
    return Project.count();
}
module.exports = {getProjectDetails,countProjects}
