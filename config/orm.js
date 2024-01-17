const Sequelize = require("sequelize");
const dbconfig = {
  user: "Interior_design_system_user",
  password: "UPCODE",
  host: "localhost",
  port: 5433,
  database: "interior_design_system",
};

const sequelize = new Sequelize(
  dbconfig.database,
  dbconfig.user,
  dbconfig.password,
  {
    host: "localhost",
    dialect: "postgres",
    port: 5433,
  }
);

sequelize
  .authenticate()
  .then(() => {
    sequelize
      .sync()
      .then((data) => {
        console.log("model synced", data);
      })
      .catch((err) => {
        console.error('Error syncing the database:', err);
      });
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("connection failed", err);
  });

module.exports = sequelize;
