const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/orm");
const { Project } = require("./project");
const User = require('./user')
const Client = sequelize.define("client", {
  clientId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    fields: "id",
  },

});
Client.hasMany(Project, { foreignKey: 'clientId', as: 'projects' });
Project.belongsTo(Client, {foreignKey:'clientId', as: 'Client'})
module.exports = {
  Client,
};
