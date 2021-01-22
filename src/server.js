const express = require("express");
require("dotenv").config();
const cors = require("cors");
const models = require("./models");

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT;

models.sequelize.sync({ force: true }).then((result) => {
  app.listen(port || 3002, () => {
    console.log("App is running on port ", port);
  });
});
