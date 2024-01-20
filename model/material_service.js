const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/orm");
const Material = sequelize.define("material", {
    materialId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      fields: "id",
    },
    name: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type : DataTypes.TEXT,
    }

  });
  module.exports = {Material}