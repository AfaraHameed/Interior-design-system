const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/orm");
const { Project } = require("./project");
const {User} = require('../model/user')
const Review = sequelize.define("review", {
  reviewId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    fields: "id",
  },
  projectId: {
    type: DataTypes.INTEGER,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.TEXT,
  },
  ratings: {
    type: DataTypes.INTEGER,
  },
});
Project.hasMany(Review, { foreignKey: "projectId", as: "project" });
Review.belongsTo(Project, { foreignKey: "projectId", as: "project" });

User.hasMany(Review, { foreignKey: "userId", as: "user" });
Review.belongsTo(User, { foreignKey: "userId", as: "user" });
 
module.exports = {
    Review,
  };