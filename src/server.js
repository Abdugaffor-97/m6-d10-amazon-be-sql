const express = require("express");
require("dotenv").config();
const cors = require("cors");
const listEndpoints = require("express-list-endpoints");
const models = require("./models");
const productRoutes = require("./services/product");
const reviewRoutes = require("./services/review");
const categoryRoutes = require("./services/category");
const cartRoutes = require("./services/cart");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/reviews", reviewRoutes);
app.use("/categories", categoryRoutes);
app.use("/carts", cartRoutes);

console.log(listEndpoints(app));

const port = process.env.PORT;

models.sequelize.sync({ force: true }).then((result) => {
  app.listen(port || 3002, () => {
    console.log(`App is running on url: http://localhost:${port}`);
  });
});
