const express = require("express");
require("dotenv").config();
const cors = require("cors");
const listEndpoints = require("express-list-endpoints");
const models = require("./models");
const productRoutes = require("./services/product");
const reviewRoutes = require("./services/review");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/reviews", reviewRoutes);

console.log(listEndpoints(app));

const port = process.env.PORT;

models.sequelize.sync({ force: true }).then((result) => {
  app.listen(port || 3002, () => {
    console.log(`App is running on url: http://localhost:${port}`);
  });
});
