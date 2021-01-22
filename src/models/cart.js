const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

const Cart = sequelize.define(
  "cart",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  },
  { timestamps: false }
);

Cart.associate = (models) => {
  Cart.belongsTo(models.Product);
};

module.exports = Cart;
