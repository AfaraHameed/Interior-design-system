const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/orm");
const {Project}=require('../model/project')
const {Material}=require('../model/material_service')
const Budget = sequelize.define("budget", {
    budgetId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      fields: "id",
    },
    allocatedAmount:{
        type:DataTypes.DECIMAL(10,2)
    },
    projectId:{
        type:DataTypes.INTEGER
    },
    materialId:{
        type:DataTypes.INTEGER
    }
})
Budget.belongsTo(Project, {
    foreignKey: 'projectId', 
    as: 'project',  
    onDelete: 'CASCADE',
  });
  
  Budget.belongsTo(Material, {
    foreignKey: 'materialId',
    as: 'material', 
    onDelete: 'CASCADE', 
  });
  module.exports = {Budget}