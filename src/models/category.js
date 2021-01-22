const { DataTypes } = require("sequelize");

const Category = (sequelize) =>
  sequelize.define(
    "category",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false }
  );

Category.associate = (models) => {
  Category.hasMany(models.Product);
};

module.exports = Category;
