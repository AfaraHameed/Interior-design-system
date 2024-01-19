const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/orm");
const { Project } = require("./project");
const Portfolio = sequelize.define("portfolio", {
  portfolioId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    fields: "id",
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  beforeImage: {
    type: DataTypes.STRING,
    field: "before_image",
  },
  afterImage: {
    type: DataTypes.STRING,
    field: "after_image",
  },
  description: {
    type: DataTypes.TEXT,
  },
  projectid:{
    type: DataTypes.INTEGER,
    unique:true,
    allowNull:false
  },
  designerid:{
    type: DataTypes.INTEGER,
    // unique:true
  }
});
Project.hasOne(Portfolio, { foreignKey:"projectid" });
//Portfolio.belongsTo(Project, { foreignKey: "projectid"});
module.exports = {
  Portfolio,
};
