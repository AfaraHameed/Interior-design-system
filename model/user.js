const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/orm");
const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    fields: "id",
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: { msg: "enter username" },
    },
    unique: {
      msg: "user name already exist",
    },
    field: "Username",
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false, // don't ever make this null
    field: "Password",
    validate: {
      min: {
        args: [4],
        msg: "Minimum 4 characters required in last name",
      },
      notEmpty: {
        msg: "please enter password",
      },
    },
  },
  role: {
    type: DataTypes.ENUM("admin", "client", "designer"),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "please select the role",
      },
    },
    field: "Role",
  },
  firstname: {
    type: DataTypes.STRING,
    field: "First Name",
  },
  lastname: {
    type: DataTypes.STRING,
    field: "Last Name",
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: {
        msg: "Invalid email address",
      },
    },
    unique: {
      msg: "email already exist",
    },

    field: "Email",
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "Phone Number",
  },
  place: {
    type: DataTypes.STRING,
    field: "Place",
  },
  district: {
    type: DataTypes.STRING,
    field: "District",
  },
});
module.exports = {
  User,
};
