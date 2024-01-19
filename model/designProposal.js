const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/orm");
const { Project } = require("./project");
const DesignProposal = sequelize.define("designproposal", {
  proposalId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    fields: "id",
  },
  proposalText: {
    type: DataTypes.TEXT,
  },
  attachment: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.ENUM("Pending", "Approved", "Rejected"),
  },
});

module.exports = { DesignProposal };
