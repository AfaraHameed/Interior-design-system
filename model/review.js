const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/orm");
const { Project } = require("./project");
const {Client} = require('../model/client')
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
  clientId: {
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
Review.belongsTo(Project, { foreignKey: "projectId", as: "reviews" });

Client.hasMany(Review, { foreignKey: "clientId", as: "client" });
Review.belongsTo(Client, { foreignKey: "clientId", as: "review" });

module.exports = {
    Review,
  };