// const { Sequelize, DataTypes} = require("sequelize");
// const sequelize = require('../config/orm')
// const User = require('../model/user')
// console.log("in project model");
// const Project = sequelize.define("project", {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//     unique: true,
//     fields: "id",
//   },
//   ProjectName:{
//     type:DataTypes.STRING,
//     allowNull:false,
//     validate:{
//         notEmpty: { msg: "project name" },
//     }
//   },
//   status:{
//     type:DataTypes.ENUM("Started","InProgress","Completed"),
//     allowNull:false
//   },
//   description:{
//     type:DataTypes.TEXT,
//   },
//   Budget:{
//     type:DataTypes.DECIMAL(10,2),
//     allowNull:false
//   },
//  startdate:{
//     type:DataTypes.DATE,
//  },
//  endDateExpected:{
//     type:DataTypes.DATE
//   },
// inspirationalImg:{
//     type:DataTypes.STRING
// },
// AdditionalDoc:{
//     type:DataTypes.STRING
// },
// clientId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   designerId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
// }
// )
// // Project.belongsTo(User, { foreignKey: 'clientId', as: 'client' });
// // Project.belongsTo(User, { foreignKey: 'designerId', as: 'designer' });

// module.exports=Project