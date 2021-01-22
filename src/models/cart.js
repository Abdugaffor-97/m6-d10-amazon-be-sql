const { DataTypes } = require("sequelize");

const Cart = (sequelize) =>
  sequelize.define(
    "cart",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false }
  );

Cart.associate = (models) => {
  Cart.belongsTo(models.Product);
};

module.exports = Cart;
