const express = require("express");
const dotenv = require("dotenv");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const sequelize = require("./config/orm");
const session = require("express-session");
// const { sequelize } = require('../config/orm');
const User = require('./model/user');
const Project = require('./model/project');
const Client = require('./model/client')
const Designer=require('./model/designer')


const errorHandler = require("./middlewares/errorHandler");
dotenv.config({ path: "./config/config.env" });
const app = express();

app.use(express.json());
app.use(
  session({
    secret: "upcode",
    resave: false,
    saveUninitialized: false,
  })
);
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);

// sequelize.sync()
//   .then(() => {
//     console.log('Models synchronized successfully');
//     // Your application logic here
//   })
//   .catch((error) => {
//     console.error('Error synchronizing models:', error);
//   });
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`running in ${process.env.NODE_ENV} on ${port}`);
});
app.use(errorHandler);