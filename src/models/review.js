const { DataTypes } = require("sequelize");

const Review = (sequelize) =>
  sequelize.define("review", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    review: { type: DataTypes.TEXT, allowNull: false },
  });

Review.associate = (models) => {
  belongsToMany(models.User);
};

module.exports = Review;
