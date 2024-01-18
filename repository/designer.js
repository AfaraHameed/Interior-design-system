const { Designer, DesignerProject } = require("../model/designer");
const { Project } = require("../model/project");
const { Task } = require("../model/task");
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
const addTask = (projectId, taskName, description, status, dueDate) => {
  console.log(projectId);
  return new Promise((resolve, reject) => {
    Task.create({ projectId, taskName, description, status, dueDate })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const getTasks = (projectId) => {
  return new Promise((resolve, reject) => {
    Task.findAll({ where: { projectId } })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const updateTaskStatus = (statusToUpdate,taskId,projectId)=>{
  console.log(statusToUpdate,taskId,projectId);
  return new Promise (async(resolve,reject)=> {
      await Task.update({status:statusToUpdate},{
        where:{
          taskId:taskId,
          projectId:projectId
        },returning:true
      }).then((data)=>{
        resolve(data[1])
      }).catch((err)=>{
        reject(err)
      })
  })
}
const updateProjectStatus = (projectId,status)=>{
  return new Promise((resolve,reject)=>{
    Project.update({status:status},{where:{id:projectId},returning:true}).then((data)=>{
      console.log(data);
      resolve(data[1])

    }).catch((err)=>{
      reject(err)
    })
  })
 
}
module.exports = {
  addDesigner,
  getAllProjects,
  getDesignerId,
  addTask,
  getTasks,
  updateTaskStatus,
  updateProjectStatus
};
