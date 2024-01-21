const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/orm");
const User = require('../model/user')
const {DesignProposal} = require('../model/designProposal')
const Project = sequelize.define("project", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        fields: "id",
      },
      projectName:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty: { msg: "project name" },
        }
      },
      status:{
        type:DataTypes.ENUM("Started","InProgress","Completed"),
        allowNull:false
      },
      description:{
        type:DataTypes.TEXT,
      },
      budget:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false
      },
     startdate:{
        type:DataTypes.DATE,
     },
     endDateExpected:{
        type:DataTypes.DATE
      },
    inspirationalImg:{
        type:DataTypes.STRING
    },
    additionalDoc:{
        type:DataTypes.STRING
    },
    clientId: {
      type: DataTypes.INTEGER,
      field: 'clientId', 
    },
    proposalId: {
      type: DataTypes.INTEGER,
      allowNull: true, // Allow null initially
      field:'proposalId'
    },
});
DesignProposal.hasOne(Project,{foreignKey:'proposalId'})
Project.belongsTo(DesignProposal,{foreignKey:'proposalId'}) 

module.exports = {
  Project,
};
