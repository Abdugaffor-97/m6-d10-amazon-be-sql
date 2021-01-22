const { Sequelize } = require("sequelize");
const Product = require("./product");
const Cart = require("./cart");
const Category = require("./category");
const Review = require("./review");
const User = require("./user");

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    dialect: "postgres",
  }
);

const models = {
  Product: Product(sequelize),
  Cart: Cart(sequelize),
  Category: Category(sequelize),
  Review: Review(sequelize),
  User: User(sequelize),
};

models.sequelize = sequelize;
models.Sequelize = Sequelize;

sequelize
  .authenticate()
  .then(() => console.log("DB Connected"))
  .catch((e) => console.log("Connection failed", e));

module.exports = models;
