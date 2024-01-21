const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/orm");
const { Project } = require("./project");
const User = require("./user");
const Designer = sequelize.define("designer", {
  designerId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    fields: "id",
  },
});
const DesignerProject = sequelize.define(
  "DesignerProject",
  {
    designerId: { type: DataTypes.INTEGER, refereces: { model: Project } },
    projectId: { type: DataTypes.INTEGER, refereces: { model: Designer } },
  }
);
Project.belongsToMany(Designer, {
  through: "DesignerProject",
  foreignKey: "projectId",
});
Designer.belongsToMany(Project, {
  through: "DesignerProject",
  foreignKey: "designerId",
});
module.exports = {
  Designer,
  DesignerProject,
};
