const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/orm");
const { Project } = require("./project");
const User = require('./user')
const Designer = sequelize.define("designer", {
  designerId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    fields: "id",
  },

});
const DesignerProject = sequelize.define("designerProject", {
  selfGranted: DataTypes.BOOLEAN
}, { timestamps: false });
Project.belongsToMany(Designer, { through: 'DesignerProject' });
Designer.belongsToMany(Project, { through: 'DesignerProject' });
module.exports = {
  Designer,
  DesignerProject 
};
