const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/orm");
const FAQ = sequelize.define("FAQ", {
  FAQId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    fields: "id",
  },
  question: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: { msg: "Question field cannot be empty" },
    },
  },
  answer: {
    type: DataTypes.TEXT,
  },
});
module.exports={FAQ}