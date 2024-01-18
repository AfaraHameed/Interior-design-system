const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/orm");
const { Project } = require("./project");
const Task = sequelize.define("task", {
  taskId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    fields: "id",
  },
  projectId:{
    type :DataTypes.INTEGER ,
  },
  taskName:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  description:{
    type:DataTypes.TEXT,
  },
  status:{
    type:DataTypes.ENUM('To Do','Doing', 'Done'),
  },
  dueDate:{
    type:DataTypes.DATE
  }
});
Project.hasMany(Task, { foreignKey: 'projectId', as: 'projects' });
Task.belongsTo(Project, {foreignKey:'projectId', as: 'Tasks'})
module.exports = {
  Task,
};
