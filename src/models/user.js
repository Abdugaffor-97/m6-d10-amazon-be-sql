const { DataTypes } = require("sequelize");

const User = (sequelize) =>
  sequelize.define(
    "user",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false }
  );

User.associate = (models) => {
  User.belongsToMany(models.Product, {
    through: { model: models.Cart, unique: false },
  });
  User.belongsToMany(models.review);
};

module.exports = User;
