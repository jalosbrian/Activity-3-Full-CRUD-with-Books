import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";

export const Review = sequelize.define("Review", {
  reviewerName: { type: DataTypes.STRING, allowNull: false },
  rating: { type: DataTypes.INTEGER, allowNull: false },
  comment: { type: DataTypes.TEXT },
  productId: { type: DataTypes.INTEGER },
  isApproved: { type: DataTypes.BOOLEAN, defaultValue: false }
});