const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

const Product = sequelize.define("product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  brand: { type: DataTypes.STRING, allowNull: false },
  img: {
    type: DataTypes.STRING,
    defaultValue:
      "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80",
  },
  price: { type: DataTypes.FLOAT, allowNull: false },
});

Product.associate = (models) => {
  Product.belongsTo(models.Category);
  Product.hasMany(models.Cart);
};

module.exports = Product;
