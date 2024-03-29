const express = require("express");
const dotenv = require("dotenv");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const designerRouter=require("./routes/designer")
const clientRouter = require('./routes/client')
const sequelize = require("./config/orm");
const session = require("express-session");
// const { sequelize } = require('../config/orm');
const User = require('./model/user');
const Project = require('./model/project');
const Client = require('./model/client')
const Designer=require('./model/designer')
const Task = require('./model/task')
const Portfolio = require("./model/portfolio")
const Material = require("./model/material_service")
const Budget = require('./model/budget')
const Review = require('./model/review')
// const DesignerProject=require('./model/designer')
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const errorHandler = require("./middlewares/errorHandler");
const { verifyToken } = require("./util/jwtHelper");
const { DesignProposal } = require("./model/designProposal");
dotenv.config({ path: "./config/config.env" });
const app = express();
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'API for interior design system',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

app.use(express.json());
app.use(
  session({
    secret: "upcode",
    resave: false,
    saveUninitialized: false,
  })
);
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
app.use("/api/designer",designerRouter)
app.use("/api/client",clientRouter)


const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`running in ${process.env.NODE_ENV} on ${port}`);
});
app.use(errorHandler);
