const { DataTypes } = require("sequelize");

const Category = (sequelize) =>
  sequelize.define(
    "category",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    },
    { timestamps: false }
  );

Category.associate = (models) => {
  Category.hasMany(models.Product);
};

module.exports = Category;
