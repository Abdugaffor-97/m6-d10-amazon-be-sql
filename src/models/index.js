const { Sequelize } = require("sequelize");
const Product = require("./product");

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
  Product: Product(),
};

models.sequelize = sequelize;
models.Sequelize = Sequelize;

sequelize
  .authenticate()
  .then(() => console.log("DB Connected"))
  .catch((e) => console.log("Connection failed", e));

module.exports = models;
