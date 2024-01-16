const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const app = express();

app.use(express.json());
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`running in ${process.env.NODE_ENV} on ${port}`);
});
