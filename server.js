const express = require("express");
const dotenv = require("dotenv");
const adminRouter = require('./routes/admin')
const sequelize = require('./config/orm')
const errorHandler=require('./middlewares/errorHandler')
dotenv.config({ path: "./config/config.env" });
const app = express();

app.use(express.json());
app.use("/api/admin",adminRouter)

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`running in ${process.env.NODE_ENV} on ${port}`);
});
app.use(errorHandler)